export type ProcessStepMotifId = "consultation" | "quote" | "mobilization" | "signoff";

export type GLProcessStructuredStep = {
  index: string;
  title: string;
  body: string;
  titleAccentKey?: string;
  motif?: ProcessStepMotifId;
};

/** Legacy long-string steps or structured tiles for `#process`. */
export type GLProcessStep = string | GLProcessStructuredStep;
