import { Application } from "probot";
import Git from "./git";
import { addLabel, closeIssue, commentIssue, isSuperUser } from "./utils";

Git.init();

export = (app: Application) => {
  app.on(
    ["pull_request.opened", "pull_request.edited", "pull_request.synchronize"],
    Git.onPullRequestCreated,
  );

  app.on(
    "pull_request.closed",
    Git.onPullRequestFinalized
  );
};
