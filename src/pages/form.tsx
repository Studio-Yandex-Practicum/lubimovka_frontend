import { useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { fetcher } from 'shared/fetcher';
import AppLayout from 'components/app-layout';
import PlayProposalLayout from 'components/play-proposal-layout';
import PlayProposalTitle from 'components/play-proposal-title';
import Form from 'components/ui/form';
import TextInput from 'components/ui/text-input';
import { FileInput } from 'components/ui/file-input';
import { Button } from 'components/ui/button';
import { Nullable } from 'shared/types';

import playScript from '/public/images/form/play-script.jpg';

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetcher('/form');

  return {
    props: {
      data,
    },
  };
};

const ACCEPTABLE_FILE_TYPES = '.doc, .docx, .txt, .odt, .pdf, .rtf';

const Participation: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [file, setFile] = useState<Nullable<File>>();

  const getFileError = () => {
    // TODO: добавить проверки в соответствии с описанием поля в дизайне
    if (file && /[а-яА-ЯЁё]/.test(file?.name)) {
      return 'Файл содержит кириллицу, пожалуйста, переименуйте его.';
    }

    return;
  };

  const handleFileChange = (file: Nullable<File>) => {
    setFile(file);
  };

  return (
    <AppLayout>
      <PlayProposalLayout>
        <PlayProposalLayout.Image>
          <Image
            src={playScript}
            alt="Напечатанная читка в руках человека"
            layout="fill"
            objectFit="cover"
          />
        </PlayProposalLayout.Image>
        <PlayProposalLayout.Column>
          <PlayProposalTitle />
          <PlayProposalLayout.Form>
            <Form>
              <Form.Fieldset legend="О вас">
                <Form.Field>
                  <TextInput
                    ariaLabel="Имя"
                    placeholder="Имя"
                  />
                </Form.Field>
                <Form.Field>
                  <TextInput
                    ariaLabel="Фамилия"
                    placeholder="Фамилия"
                  />
                </Form.Field>
                <Form.Field>
                  <TextInput
                    ariaLabel="Год рождения"
                    placeholder="Год рождения"
                  />
                </Form.Field>
                <Form.Field>
                  <TextInput
                    ariaLabel="Город проживания"
                    placeholder="Город проживания"
                  />
                </Form.Field>
                <Form.Field>
                  <TextInput
                    ariaLabel="Номер телефона"
                    placeholder="Номер телефона"
                  />
                </Form.Field>
                <Form.Field>
                  <TextInput
                    ariaLabel="E-mail"
                    placeholder="E-mail"
                  />
                </Form.Field>
              </Form.Fieldset>
              <Form.Fieldset legend="О пьесе">
                <Form.Field>
                  <TextInput
                    ariaLabel="Название"
                    placeholder="Название"
                  />
                </Form.Field>
                <Form.Field>
                  <TextInput
                    ariaLabel="Год написания"
                    placeholder="Год написания"
                  />
                </Form.Field>
                <Form.Actions>
                  <Form.Action>
                    <FileInput
                      accept={ACCEPTABLE_FILE_TYPES}
                      fileName={file?.name}
                      errorText={getFileError()}
                      onChange={handleFileChange}
                    />
                  </Form.Action>
                  <Form.ActionCaption view="shift">
                    <p>
                      {`Только файлы формата ${ACCEPTABLE_FILE_TYPES}.`}
                    </p>

                    <p>
                      Название файла должно содержать сначала фамилию автора, а затем
                      название пьесы, например Chehov-Chaika.doc{'\n'}
                      Название файла с пьесой не должно содержать кириллические символы
                      и пробелы. В названии файла должны быть только латинские символы и
                      знаки - и _.
                    </p>
                  </Form.ActionCaption>
                  <Form.Action>
                    <Button
                      type="submit"
                      iconPlace="right"
                      icon="arrow-right"
                      size="l"
                      border="full"
                      label="Отправить"
                      align="space-between"
                      width="100%"
                    />
                  </Form.Action>
                  <Form.ActionCaption view="below">
                    {'Нажимая на кнопку «Отправить» вы даёте согласие '}
                    <Link href={data.url_privacy}>
                      <a>на обработку персональных данных </a>
                    </Link>
                  </Form.ActionCaption>
                </Form.Actions>
              </Form.Fieldset>
            </Form>
          </PlayProposalLayout.Form>
        </PlayProposalLayout.Column>
      </PlayProposalLayout>
    </AppLayout>
  );
};

export default Participation;
