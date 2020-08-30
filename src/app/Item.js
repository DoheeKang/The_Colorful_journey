import { ITEM_SIZE } from "../constant/map";
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player'

class Item {
  constructor(x, y, color, ctx, player) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.color = color;
    this.player = player;
    this.show = true;
    this.changeBackground = true;
  }

  update() {
    const {x, y, player} = this;
    // collision
    if (x - ITEM_SIZE < player.x + PLAYER_WIDTH
      && x + ITEM_SIZE > player.x
      && y - ITEM_SIZE < player.y + PLAYER_HEIGHT
      && y + ITEM_SIZE > player.y) {
        this.show = false;
      }
  }

  render(cx) {
    const {ctx, x, y, color} = this;
      if (this.show) {
        ctx.beginPath();
        ctx.arc(x - cx, y, ITEM_SIZE, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
        ctx.fill();
      } else {
        
      }
  }
}

export default Item;
