pipeline {
  agent any

  tools {
    jdk 'JDK1.8'
  }

    stages {
      stage('build22') {
        steps {
            bat 'mvn --version'

            bat 'echo "run compile"'
            bat '''
                mvn clean compile
            '''
        }
      }

      stage('test33') {
              steps {
                  bat 'mvn --version'

                  bat 'echo "Run test"'
                  bat '''
                      mvn clean test
                  '''
              }
            }
    }

}
