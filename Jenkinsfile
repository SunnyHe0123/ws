pipeline {
  agent any


  tools {
    jdk 'JDK1.8'
  }

    stages {
      stage('build') {
        steps {
            bat 'mvn --version'

            bat 'run compile"'
            bat '''
                mvn clean compile
            '''
        }
      }

      stage('test') {
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
