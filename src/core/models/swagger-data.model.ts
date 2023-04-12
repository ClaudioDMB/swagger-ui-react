import { PathMethods } from './pathmethods.model';

export interface SwaggerSpec {
  swagger: string;
  info: {
    title: string;
    description?: string;
    version: string;
    contact?: {
      name?: string;
      email?: string;
      url?: string;
    };
    license?: {
      name: string;
      url?: string;
    };
  };
  host?: string;
  basePath?: string;
  schemes?: string[];
  consumes?: string[];
  produces?: string[];
  paths: {
    [path: string]: PathMethods;
  };
  definitions?: {
    [name: string]: {
      type?: string;
      properties?: {
        [propertyName: string]: {
          $ref?: string;
          type?: string;
          format?: string;
        };
      };
      required?: string[];
    };
  };
  parameters?: {
    [name: string]: {
      name: string;
      in: string;
      description?: string;
      required?: boolean;
      type?: string;
      format?: string;
      schema?: {
        $ref?: string;
        type?: string;
        format?: string;
      };
      items?: {
        $ref?: string;
        type?: string;
        format?: string;
      };
      default?: any;
      enum?: any[];
    };
  };
  responses?: {
    [name: string]: {
      description: string;
      schema?: {
        $ref?: string;
        type?: string;
        format?: string;
      };
    };
  };
  securityDefinitions?: {
    [name: string]: {
      type: string;
      description?: string;
      name?: string;
      in?: string;
      flow?: string;
      authorizationUrl?: string;
      tokenUrl?: string;
      scopes?: {
        [name: string]: string;
      };
    };
  };
  tags?: {
    name: string;
    description?: string;
    externalDocs?: {
      description?: string;
      url: string;
    };
  }[];
  externalDocs?: {
    description?: string;
    url: string;
  };
}
