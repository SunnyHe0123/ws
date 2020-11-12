package com.sunny.ws;

public class Greeting {
   public String getContent() {
      return content;
   }

   public void setContent(String content) {
      this.content = content;
   }

   public Greeting(String content) {
      this.content = content;
   }

   public Greeting() {
   }

   private String content;
}
