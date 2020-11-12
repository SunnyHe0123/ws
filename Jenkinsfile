pipeline {
  agent any

  tools {
    jdk 'JDK 1.8.0'
  }

    stages {
      stage('build') {
        steps {
            bat 'mvn --version'

            bat 'echo "Hello World!!!!"'
            bat '''
                echo "Multiline shell steps works too"
                ls -lah
            '''
        }
      }
    }

}
