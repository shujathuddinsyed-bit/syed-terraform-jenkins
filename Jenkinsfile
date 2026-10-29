pipeline {
    agent any

    environment {
        NODE_OPTIONS = '--openssl-legacy-provider'
        CI = 'false'
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
                        echo "Installing dependencies..."

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
                        echo "Building React application..."

                        export NODE_OPTIONS=--openssl-legacy-provider
                        export CI=false

                        npm run build

                        echo "React build completed successfully."

                        test -f build/index.html

                        echo "Build folder verified."
                        ls -lah build/
                    '''
                }
            }
        }

        stage('Deploy to Nginx') {
            steps {
                dir('Trading-UI') {
                    sh '''
                        echo "Deploying application to Nginx..."

                        sudo rm -rf /usr/share/nginx/html/*
                        sudo cp -r build/* /usr/share/nginx/html/

                        echo "Restarting Nginx..."
                        sudo systemctl restart nginx

                        echo "Checking Nginx..."
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
            echo 'TRADING UI DEPLOYMENT SUCCESSFUL!'
            echo '=========================================='
            echo 'Application: http://16.113.162.174'
        }

        failure {
            echo '=========================================='
            echo 'TRADING UI DEPLOYMENT FAILED!'
            echo '=========================================='
        }

        always {
            echo 'Jenkins pipeline execution completed.'
        }
    }
}
