workflow "Build and deploy on push" {
  on = "push"
  resolves = ["Invalidate Cloudfront distribution"]
}

action "Install dependencies" {
  uses = "actions/npm@master"
  args = "install"
}

action "Bundle" {
  uses = "actions/npm@master"
  needs = "Install dependencies"
  args = "run-script build"
}

action "Deploy to S3" {
  uses = "actions/aws/cli@master"
  needs = "Bundle"
  args = "s3 cp --recursive ./dist s3://naarkommerringeriksbanen-prod-s3bucket-1g6prwtitfqjx"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}

action "Invalidate Cloudfront distribution" {
  uses = "actions/aws/cli@master"
  needs = "Deploy to S3"
  args = "cloudfront create-invalidation --distribution-id E1FG7BN4IOA6V7 --paths /index.html"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}
