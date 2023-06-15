   if (currentlife <= 0) {
          cars[index - 1].changeImage("blast");
          cars[index - 1].scale = 0.3;
        }
        //PASSO 2:
        
        if (player.life <= 0) {
          this.blast = true;
          this.playerMoving = false;
        }
