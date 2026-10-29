```groovy
pipeline {
    agent any

    environment {
        NODE_OPTIONS = '--openssl-legacy-provider'
        CI = 'false'
    }

    stages {

        stage('Git Clone') {
            steps {
                echo '=========================================='
                echo 'Cloning source code from GitHub...'
                echo '=========================================='

                git branch: 'main',
                    url: 'git@github.com:shujathuddinsyed-bit/syed-terraform-jenkins.git'
            }
        }

        stage('Check React Application') {
            steps {
                dir('Trading-UI') {
                    sh '''
                        echo '=========================================='
                        echo 'Checking React application...'
                        echo '=========================================='

                        pwd
                        ls -la

                        echo "Checking package.json..."
                        test -f package.json

                        echo "Checking package-lock.json..."
                        test -f package-lock.json

                        echo "Checking .env..."
                        test -f .env

                        echo "React project found successfully."
                    '''
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('Trading-UI') {
                    sh '''
                        echo '=========================================='
                        echo 'Installing npm dependencies...'
                        echo '=========================================='

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
                        echo '=========================================='
                        echo 'Building React application...'
                        echo '=========================================='

                        export NODE_OPTIONS=--openssl-legacy-provider
                        export CI=false

                        echo "NODE_OPTIONS=$NODE_OPTIONS"
                        echo "CI=$CI"

                        npm run build -- --no-lint

                        echo '=========================================='
                        echo 'React build completed successfully.'
                        echo '=========================================='

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
                        echo '=========================================='
                        echo 'Deploying React application to Nginx...'
                        echo '=========================================='

                        echo "Removing old application files..."
                        sudo rm -rf /usr/share/nginx/html/*

                        echo "Copying new React build..."
                        sudo cp -r build/* /usr/share/nginx/html/

                        echo "Restarting Nginx..."
                        sudo systemctl restart nginx

                        echo "Checking Nginx status..."
                        sudo systemctl is-active nginx

                        echo '=========================================='
                        echo 'Nginx deployment completed successfully.'
                        echo '=========================================='
                    '''
                }
            }
        }
    }

    post {

        success {
            echo '=========================================='
            echo '       TRADING UI DEPLOYMENT SUCCESS      '
            echo '=========================================='
            echo 'Application URL: http://16.113.162.174'
            echo '=========================================='
        }

        failure {
            echo '=========================================='
            echo '        TRADING UI DEPLOYMENT FAILED      '
            echo '=========================================='
            echo 'Check the Jenkins Console Output.'
            echo '=========================================='
        }

        always {
            echo 'Jenkins pipeline execution completed.'
        }
    }
}
```
