/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface DomainOptions {
  /**
   * Grouping name for the Domain
   */
  name: string;
  /**
   * Subpath of the domain within libs directory
   */
  directory?: string;
  /**
   * Add an app for the domain?
   */
  addApp?: boolean;
  /**
   * Subpath of the domain within apps directory
   */
  appDirectory?: string;
  /**
   * Add ngrx for the associated app (addApp required)
   */
  ngrx?: boolean;
  /**
   * A type to determine if and how to build the library.
   */
  type?: 'internal' | 'buildable' | 'publishable';
  [k: string]: any;
}
