import { Component } from '@angular/core';

@Component({
  selector: 'app-zero-section',
  templateUrl: './zero-section.component.html',
  styleUrls: ['./zero-section.component.css']
})
export class ZeroSectionComponent {
  words: string[] = ['Angular Guru', 'Frontend Pro', 'Code Wrangler', 'UI Craftsman']; // Array of words to cycle through
  currentIndex: number = 0; // Index of the current word
  currentWord: string = ''; // Variable to hold the current word

  ngOnInit() {
    this.changeWord(); // Call the changeWord function when the component initializes
    setInterval(() => this.changeWord(), 1000); // Call the changeWord function every 2 seconds
  }

  changeWord() {
    this.currentWord = this.words[this.currentIndex]; // Set the currentWord variable to the current word
    this.currentIndex = (this.currentIndex + 1) % this.words.length; // Move to the next word, wrapping around if necessary
  }
}
