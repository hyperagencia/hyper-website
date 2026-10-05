export interface LocalizedText {
  es: string;
  en: string;
}

export interface LegalSection {
  heading: LocalizedText;
  /**
   * One entry per paragraph/list block. Content is static HTML authored by us (not
   * user input) — rendered via dangerouslySetInnerHTML in LegalPageLayout.
   */
  body: LocalizedText[];
}

export interface LegalPage {
  title: LocalizedText;
  /** Pre-formatted, e.g. { es: '25 de agosto de 2026', en: 'August 25, 2026' } */
  updated: LocalizedText;
  sections: LegalSection[];
}
