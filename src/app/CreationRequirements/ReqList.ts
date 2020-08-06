import { Requirements } from './Requirements';

//import class requirements
import { BarbarianRequirements } from './Classes/BarbarianReqs';
import { BardRequirements } from './Classes/BardReqs';
import { ClericRequirements } from './Classes/ClericReqs';
import { DruidRequirements } from './Classes/DruidReqs';
import { FighterRequirements } from './Classes/FighterReqs';
import { MonkRequirements } from './Classes/MonkReqs';
import { PaladinRequirements } from './Classes/PaladinReqs';
import { RangerRequirements } from './Classes/RangerReqs';
import { RogueRequirements } from './Classes/RogueReqs';
import { SorcerorRequirements } from './Classes/SorcerorReqs';
import { WarlockRequirements } from './Classes/WarlockReqs';
import { WizardRequirements } from './Classes/WizardReqs';


//create instances of class requirements for each class
var barbarianReqs: BarbarianRequirements = new BarbarianRequirements();
var bardReqs: BardRequirements = new BardRequirements();
var clericReqs: ClericRequirements = new ClericRequirements();
var druidReqs: DruidRequirements = new DruidRequirements();
var fighterReqs: FighterRequirements = new FighterRequirements();
var monkReqs: MonkRequirements = new MonkRequirements();
var paladinReqs: PaladinRequirements = new PaladinRequirements();
var rangerReqs: RangerRequirements = new RangerRequirements();
var rogueReqs: RogueRequirements = new RogueRequirements();
var sorcerorReqs: SorcerorRequirements = new SorcerorRequirements();
var warlockReqs: WarlockRequirements = new WarlockRequirements();
var wizardReqs: WizardRequirements = new WizardRequirements();


export const ClassRequirements: Requirements[] = [

    //Simply list requirement objects here:
    barbarianReqs,
    bardReqs,
    clericReqs,
    druidReqs,
    fighterReqs,
    monkReqs,
    paladinReqs,
    rangerReqs,
    rogueReqs,
    sorcerorReqs,
    warlockReqs,
    wizardReqs

]