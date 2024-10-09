/**
 * For debugging, change this value to multiply all timeout values below while
 * maintain the relations between each value (E2E can be so zetta slow when ran
 * locally, so we need this).
 *
 * On the other hand, if you want to actually change the timeout on CI/CD,
 * then ignore this multiplier value and just change the individual enum below.
 */
const multiplier = 1

export enum Timeout {
  /** Default general timeout. */
  Default = 5000 * multiplier,

  /** Component that we expected to take less time for interaction. */
  SmallComponentLoad = 3000 * multiplier,

  /** Component that we expected to take some time for interaction. */
  ComponentLoad = 10000 * multiplier,

  /** Data loading timeout. */
  DataLoad = 15000 * multiplier,

  /** Page loading timeout. */
  PageLoad = 20000 * multiplier,

  /** Uploading the file or loading the images timeout. */
  FileLoad = 30000 * multiplier,
}
