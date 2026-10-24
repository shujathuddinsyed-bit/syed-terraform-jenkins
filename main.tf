terraform {
  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.5"
    }
  }
}

provider "local" {}

resource "local_file" "jenkins_demo" {
  filename = "jenkins-terraform.txt"

  content = "Terraform executed successfully from Jenkins!"
}
