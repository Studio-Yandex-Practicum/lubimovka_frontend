
import { AppLayout } from 'components/app-layout';
import { Breadcrumb } from 'components/breadcrumb';
import { ConstructorContent } from 'components/constructor-content';
import { PageBreadcrumbs } from 'components/page';
import { ProjectHeadline } from 'components/project-headline';
import { ProjectLayout } from 'components/project-layout';
import { SEO } from 'components/seo';
import { getProject } from 'services/api/projects';
import { isHttpRequestError } from 'services/fetcher';
import { notFoundResult } from 'shared/constants/server-side-props';

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

const Project = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    title,
    intro,
    description,
    image,
    contents,
  } = props;

  return (
    <AppLayout>
      <SEO
        title={title}
        description={description}
      />
      <ProjectLayout>
        <PageBreadcrumbs>
          <Breadcrumb
            text="Проекты"
            path="/projects"
          />
        </PageBreadcrumbs>
        <ProjectHeadline
          title={title}
          intro={intro}
          image={image}
        />
        <ProjectLayout.Description>
          {description}
        </ProjectLayout.Description>
        <ConstructorContent
          variant="project"
          // @ts-expect-error: TODO: В документации API нет описания ответов с блоками конструктора
          blocks={contents}
        />
      </ProjectLayout>
    </AppLayout>
  );
};

export const getServerSideProps = async ({ params }: GetServerSidePropsContext<Record<'id', string>>) => {
  const { id: projectId } = params!;
  const project = await getProject(projectId);

  try {
    return {
      props: project,
    };
  } catch (error) {
    if (isHttpRequestError(error)) {
      switch (error.response.statusCode) {
      case 404:
        return notFoundResult;
      default:
        throw error;
      }
    }

    throw error;
  }
};

export default Project;
