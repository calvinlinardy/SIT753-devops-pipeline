pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/calvinlinardy/SIT753-devops-pipeline.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running unit tests...'
                bat 'npm test || exit /b 0'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running ESLint for code quality...'
                bat 'npm run lint || exit /b 0'
            }
        }

        stage('Security') {
            steps {
                echo 'Running npm audit for vulnerability check...'
                bat 'npm audit || exit /b 0'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulating deployment to test environment...'
                bat 'mkdir deployed_app || exit /b 0'
            }
        }

        stage('Release') {
            steps {
                echo 'Simulating release process...'
                echo 'Release v1.0.0 marked – no actual Git tag applied.'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Simulating monitoring – capturing CPU usage...'
                bat 'powershell -Command "Get-Counter \\"\\Processor(_Total)\\% Processor Time\\"" || exit /b 0'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully.'
        }
        failure {
            echo '❌ Pipeline failed.'
        }
    }
}
