import { getProps } from '../utilities';

const DEFAULT_PROPS = ['id', 'className', 'children'];
export const getDefaultProps = (props: any) => getProps(props, DEFAULT_PROPS);
export interface IDefaultProps {
  /**
   * All Components may be given an `id` attribute to uniquely identify them
   * within the document.
   */
  id?: string;
  /**
   * All Components may be given a `className` attribute to apply custom styling via
   * an externally defined `className`.  This provides support for 3rd party tools like
   * `styled-components` & `emotion` or for the application of custom styles by users
   * of these components
   */
  className?: string;
  /**
   * By default, most components accept any valid ReactNode as a child.  Extending interfaces
   * may choose to override this by defining a more or less specific type.
   */
  children?: React.ReactNode;
}
export type TDefaultProps = {
  /**
   * All Components may be given an `id` attribute to uniquely identify them
   * within the document.
   */
  id?: string;
  /**
   * All Components may be given a `className` attribute to apply custom styling via
   * an externally defined `className`.  This provides support for 3rd party tools like
   * `styled-components` & `emotion` or for the application of custom styles by users
   * of these components
   */
  className?: string;
  /**
   * By default, most components accept any valid ReactNode as a child.  Extending interfaces
   * may choose to override this by defining a more or less specific type.
   */
  children?: React.ReactNode;
};
