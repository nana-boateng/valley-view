import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: ` <br />
    <h2
      id="contact"
      class="xl:hidden text-xl text-center font-semibold mt-10 mx-4"
    >
      For more information or to arrange a tour, contact Chris Parrott
    </h2>
    <div class="xl:flex xl:flex-row-reverse">
      <img
        src="./../../../assets/contact-image.png"
        alt="Portrait of Chris"
        class="h-56 mx-auto my-5 xl:h-96"
      />
      <div class="xl:my-auto xl:w-2/3">
        <h2
          id="contact"
          class="hidden xl:flex text-3xl w-2/3 mx-auto text-center my-2"
        >
          For more information or to arrange a tour, contact Chris Parrott
        </h2>
        <ul class="flex flex-col mx-4 xl:text-2xl xl:mx-40">
          <li class="mx-auto xl:mx-0">
            <b>Email: </b>
            <a
              href="mailto:chris@chrisparrot.ca"
              class="text-blue-800 underline"
              >chris&#64;chrisparrot.ca</a
            >
          </li>
          <li class="mx-auto xl:mx-0"><b>Phone: </b>306-206-0383</li>
          <li class="mx-auto xl:mx-0">
            <b>Cell: </b> <a href="tel:306-206-0383">306-537-6447</a>
          </li>
          <li class="mx-auto xl:mx-0"><b>Fax: </b> 306-206-0383</li>
          <li class="mx-auto md:mx-auto xl:mx-auto">
            <b>Address: </b> #3 1118 Broad Street. Realty One Real Estate
            Services Inc. Regina, SK. S4R 1X8
          </li>
        </ul>
      </div>
    </div>`,
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {}
