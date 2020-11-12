package com.sunny.ws;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class GreetingController {
   @MessageMapping("/hello")
   @SendTo("/topic/greetings")
   public Greeting greeting(MessageInfo info) {
      return new Greeting(info.getName() + ":" + info.getMessage());
   }
}
