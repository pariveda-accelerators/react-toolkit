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
};
