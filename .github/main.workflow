workflow "Build and deploy on push" {
  on = "push"
  resolves = ["build"]
}

action "install-deps" {
  uses = "actions/npm@master"
  args = "install"
}

action "build" {
  uses = "actions/npm@master"
  needs = ["install-deps"]
  args = "run-script build"
}

action "deploy" {
  uses = "actions/aws/cli@master"
  needs = ["build"]
  args = "s3 cp --recursive ./dist s3://naarkommerringeriksbanen-prod-s3bucket-1g6prwtitfqjx"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}

action "update-cdn" {
  uses = "actions/aws/cli@master"
  needs = ["deploy"]
  args = "cloudfront create-invalidation --distribution-id E1FG7BN4IOA6V7 --paths /index.html"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}