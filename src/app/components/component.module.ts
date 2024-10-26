import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterLink } from "@angular/router";

import { SubtitlesComponent } from "./subtitles/subtitles.component";

@NgModule({
    declarations: [SubtitlesComponent],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    imports:[
        CommonModule,
        IonicModule,
        RouterLink,
    ],
    exports:[SubtitlesComponent]
})
export class componentModule{}