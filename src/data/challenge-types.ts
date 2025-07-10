export const ALL_CHALLENGES = [
  "search",
  "situation",
  "truth",
  "quiz",
  "clean",
  "reorder",
  "match",
  "traffic",
] as const;

export type ChallengeType = (typeof ALL_CHALLENGES)[number];
