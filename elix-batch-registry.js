import {VIBEGRON_BATCH} from './elix-vibegron-batch.js';
import {MIRABEGRON_BATCH} from './elix-mirabegron-batch.js';
import {PONESIMOD_BATCH} from './elix-ponesimod-batch.js';
import {OZANIMOD_BATCH} from './elix-ozanimod-batch.js';
import {SIPONIMOD_BATCH} from './elix-siponimod-batch.js';
import {S1P_BATCH} from './elix-s1p-batch.js';
import {AXON_BATCH} from './elix-axon-batch.js';
import {LEMS_BATCH} from './elix-lems-batch.js';
import {ACHE_BATCH} from './elix-ache-batch.js';
import {NMJ_BATCH} from './elix-nmj-batch.js';
import {NEURO_DRUG_BATCH} from './elix-neuro-drugs.js';
import {ELI_CLINICAL_BATCH} from './eli-clinical-batch.js';
/* One explicit registry for the currently published content layers. */
import {appendContentBatches} from './elix-content-batches.js';
import {ESSENTIAL_BATCH} from './elix-essential-batch.js';
import {ALPHABET_A_BATCH} from './elix-alphabet-a.js';
import {ABC_CONTINUATION_BATCH} from './elix-abc-continuation.js';
import {RESPIRATORY_BATCH} from './elix-respiratory-batch.js';
export const ADDITIONAL_CONTENT_BATCHES=[ESSENTIAL_BATCH,ALPHABET_A_BATCH,ABC_CONTINUATION_BATCH,ELI_CLINICAL_BATCH,RESPIRATORY_BATCH,NEURO_DRUG_BATCH,NMJ_BATCH,ACHE_BATCH,LEMS_BATCH,AXON_BATCH,S1P_BATCH,SIPONIMOD_BATCH,OZANIMOD_BATCH,PONESIMOD_BATCH,MIRABEGRON_BATCH,VIBEGRON_BATCH];
export function appendAllContentBatches(editorial,pk){
 appendContentBatches(editorial,pk);
 for(const batch of ADDITIONAL_CONTENT_BATCHES)appendContentBatches(editorial,pk,batch);
}
