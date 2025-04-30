// src/AudiobookPlayer.ts

import { MediaPlayer } from "./Player";

export class AudiobookPlayer extends MediaPlayer {
  play(): void {
    console.log("Narrando audiobook...");
    this.api.play();
  }
  pause(): void {
    console.log("Audiobook pausado.");
    this.api.pause();
  }
  stop(): void {
    console.log("Audiobook encerrado.");
    this.api.stop();
  }
}
