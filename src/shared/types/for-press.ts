export type ForPressProps = {
  metaTitle: string,
  title: string,
  description: string,
  link: Url,
}

export type PRPerson = {
  name: string,
  nameDative: string,
  email: Email,
  role: string,
  photo: string,
}

export type PressReleases = {
  defaultCover: string,
  pressReleases: PressRelease[],
}

export type PressRelease = {
  year: number,
  cover: Url,
  downloadLink: Url,
  contents: Content[]
}

export type Content = TextContent<'text' | 'title' | 'preamble'> | ListContent

export type ListContent = {
  content_type: 'list',
  content_item: Record<'list', string[]>;
}

export type TextContent<T extends string> = T extends T ? {
  content_type: T,
  content_item: Record<T, string>;
} : never

