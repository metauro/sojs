/**
 * @see {@link https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#exampleObject}
 */
export type Example = {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
};
