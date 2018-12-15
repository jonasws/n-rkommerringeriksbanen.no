workflow "Build and deploy on push" {
  on = "push"
  resolves = ["build"]
}

action "build" {
  uses = "actions/npm@master"
  args = "run-script build"
}

action "deploy" {
  uses = "actions/aws/cli@master"
  needs = ["build"]
  args = "s3 cp --recursive ./dist s3://naarkommerringeriksbanen-prod-s3bucket-1g6prwtitfqjx"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}
