import { Component } from '@angular/core';

@Component({
  selector: 'app-section-one',
  template: ` <h2 id="about" class="heading">About</h2>
    <div class="md:flex md:flex-row">
      <img
        src="./../../../assets/About Image 1.png"
        alt="About image 1"
        class="image-one"
      />
      <br />
      <div class="xl:my-auto xl:mx-20">
        <p class="para">
          Valley View Estates is southern Saskatchewan's newest acreage size
          sub-division located in the beautiful Qu'Appelle Valley.
        </p>
        <br />
        <p class="para">
          Only 22 miles from Regina, 2 miles west of Craven on a paved highway.
          1 mile from Last Mountain Lake.
        </p>
        <br />
        <a href="./../../../assets/info.pdf" class="a-link">
          <span> Download Information Package </span>
          <img
            src="./../../../assets/PDF Image.png"
            alt="Icon of PDF"
            class="pdf-icon"
          />
        </a>
      </div>
    </div>`,
  styleUrls: ['./section-one.component.css'],
})
export class SectionOneComponent {}
