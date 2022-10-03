
import { AppLayout } from 'components/app-layout';
import { PageBreadcrumbs } from 'components/page';
import { ProjectLayout } from 'components/project-layout';
import { Breadcrumb } from 'components/breadcrumb';
import { ProjectHeadline } from 'components/project-headline';
import { ConstructorContent } from 'components/constructor-content';
import { SEO } from 'components/seo';
import { getProject } from 'services/api/project';
import { InternalServerError } from 'shared/helpers/internal-server-error';
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
          // @ts-expect-error
          blocks={contents}
        />
      </ProjectLayout>
    </AppLayout>
  );
};

export const getServerSideProps = async ({ params }: GetServerSidePropsContext<Record<'id', string>>) => {
  const { id: projectId } = params!;

  try {
    return {
      props: {
        ...await getProject(projectId),
      },
    };
  } catch ({ statusCode }) {
    switch (statusCode) {
    case 404:
      return notFoundResult;
    default:
      throw new InternalServerError();
    }
  }
};

export default Project;
