import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Platform } from '@ionic/angular';

declare var SpeechRecognition: any;

@Component({
  selector: 'app-akira',
  templateUrl: './akira.page.html',
  styleUrls: ['./akira.page.scss'],
})
export class AkiraPage implements OnInit {

  public theme = 'dark';
  public isListening = true;
  public recognizedText: string;
  public recognition: any;

  constructor(
    private globalService: GlobalService,
    public platform: Platform
  ) { }

  ngOnInit() {
    this.globalService.theme.subscribe(resp => {
      this.theme = resp;
    });
  }

  public startSpeechRecognition(): void {
    this.isListening = !this.isListening;
    if (this.isListening) {
      this.platform.ready().then(() => {
        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'en-US';
        this.recognition.onnomatch = (event => {
          console.log('No match found.');
        });
        this.recognition.onerror = (event => {
          console.log('Error happens.');
        });
        this.recognition.onresult = (event => {
          if (event.results.length > 0) {
            console.log('Output STT: ', event.results[0][0].transcript);
          }
        });
        this.recognition.start();
      });
    }
  }

}
