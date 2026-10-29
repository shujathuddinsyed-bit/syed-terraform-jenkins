pipeline {
    agent any

    environment {
        NODE_OPTIONS = '--openssl-legacy-provider'
    }

    stages {

        stage('Git Clone') {
            steps {
                echo 'Cloning source code from GitHub...'

                git branch: 'main',
                    url: 'git@github.com:shujathuddinsyed-bit/syed-terraform-jenkins.git'
            }
        }

        stage('Check React Application') {
            steps {
                dir('Trading-UI') {
                    sh '''
                        echo "Checking React application..."
                        pwd
                        ls -la

                        test -f package.json
                        test -f package-lock.json

                        echo "React project found successfully."
                    '''
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('Trading-UI') {
                    sh '''
                        echo "Installing npm dependencies..."
                        npm install
                        echo "Dependencies installed successfully."
                    '''
                }
            }
        }

        stage('Build React App') {
            steps {
                dir('Trading-UI') {
                    sh '''
                        echo "Starting React production build..."

                        export NODE_OPTIONS=--openssl-legacy-provider

                        npm run build

                        echo "React production build completed."

                        ls -lah build/
                    '''
                }
            }
        }

        stage('Deploy to Nginx') {
            steps {
                dir('Trading-UI') {
                    sh '''
                        echo "Deploying React application to Nginx..."

                        sudo rm -rf /usr/share/nginx/html/*

                        sudo cp -r build/* /usr/share/nginx/html/

                        sudo systemctl restart nginx

                        sudo systemctl is-active nginx

                        echo "Deployment completed successfully."
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '=========================================='
            echo 'Trading UI deployment SUCCESSFUL!'
            echo 'Application: http://16.113.162.174'
            echo '=========================================='
        }

        failure {
            echo '=========================================='
            echo 'Trading UI deployment FAILED!'
            echo 'Check Jenkins console output.'
            echo '=========================================='
        }

        always {
            echo 'Jenkins pipeline execution completed.'
        }
    }
}
