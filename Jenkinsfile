pipeline {
  agent any


  tools {
    jdk 'JDK1.8'
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
