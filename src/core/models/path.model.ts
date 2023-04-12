export interface Path {
  tags?: string[];
  summary?: string;
  description?: string;
  operationId?: string;
  produces?: string[];
  consumes?: string[];
  parameters?: {
    in: string;
    name: string;
    description?: string;
    required: boolean;
    schema?: {
      $ref?: string;
      type?: string;
      format?: string;
    };
    type?: string;
    items?: {
      $ref?: string;
      type?: string;
      format?: string;
    };
    default?: any;
    enum?: any[];
  }[];
  responses: {
    [code: string]: {
      description: string;
      schema?: {
        $ref?: string;
        type?: string;
        format?: string;
      };
    };
  };
  deprecated?: boolean;
  security?: {
    [name: string]: any[];
  }[];
};