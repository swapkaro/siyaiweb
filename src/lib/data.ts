export const GRAD = {
  rose:    'radial-gradient(120% 90% at 30% 20%, #caa3a8 0%, #8f6d77 45%, #4a3a47 100%)',
  warm:    'radial-gradient(120% 90% at 35% 20%, #d8b083 0%, #a87248 48%, #4d3320 100%)',
  sage:    'radial-gradient(120% 90% at 32% 18%, #b9bf9f 0%, #8a9472 46%, #444b39 100%)',
  slate:   'radial-gradient(120% 90% at 35% 20%, #aeb8c4 0%, #7b8694 46%, #3a414c 100%)',
  ink:     'radial-gradient(120% 100% at 30% 12%, #20242f 0%, #14171f 50%, #0c0e14 100%)',
  emerald: 'radial-gradient(120% 90% at 30% 18%, #7fb59c 0%, #3f7d63 48%, #1f3b30 100%)',
  dusk:    'radial-gradient(120% 90% at 30% 18%, #2b3550 0%, #1a2236 50%, #0d1320 100%)',
  beige:   'linear-gradient(160deg, #ece3d2 0%, #ddd0b8 100%)',
  goldwarm:'radial-gradient(110% 90% at 35% 18%, #d6a96f 0%, #b07c45 45%, #6a4526 100%)',
  night:   'radial-gradient(110% 80% at 50% 12%, #163b39 0%, #0f1c28 45%, #0a0e16 100%)',
}

export type Film = { no: string; grad: string; cap: string; who: string; dur: string }
export const FILMS: Film[] = [
  { no: 'N° 012', grad: GRAD.rose,     cap: 'Her hands, kneading, like always.',       who: 'For Maa · Karwa',               dur: '02:46' },
  { no: 'N° 014', grad: GRAD.warm,     cap: 'The road from Patna, in his own words.',  who: 'For Papa · 60th',               dur: '01:48' },
  { no: 'N° 017', grad: GRAD.sage,     cap: 'The kitchen, the radio, the afternoon.',  who: 'For Dadi, before forgetting',   dur: '02:04' },
  { no: 'N° 021', grad: GRAD.slate,    cap: 'Still the same laugh after 40 years.',    who: 'For Maa · Anniversary',         dur: '01:32' },
]

export type CreatedItem = { grad: string; name: [string, string]; meta: string; video?: string }
export const CREATED: CreatedItem[] = [
  { grad: GRAD.ink,      name: ['Anjali', "Papa's 60th"], meta: 'Sepia Dadaji · Voice Letter', video: '/videos/vid1.mp4' },
  { grad: GRAD.dusk,     name: ['Rahul',  'Mummy'],        meta: 'NRI Family · Living Portrait' },
  { grad: GRAD.emerald,  name: ['Sneha',  'Dadi'],         meta: 'Kitchen Tapes · Memory Film'  },
  { grad: GRAD.goldwarm, name: ['Vikram', 'Nana ji'],      meta: 'War Stories · Custom Song'    },
]

export const TABS = ['All', 'Papa', 'Mummy', 'Dadi-Dadu', 'Nana-Nani', 'Partner']

export type Product = {
  name: string; desc: string; rate: string; count: string
  price: string; was: string; grad: string; off: string; ready: string; stock?: string
}
export const PRODUCTS: Product[] = [
  { name: 'Memory Film',    desc: '30 seconds of their voice. A message that lives forever.',         rate: '4.9', count: '1.6K', price: '299', was: '499', grad: GRAD.goldwarm, off: '40% off', ready: 'Ready in 4 hrs' },
  { name: 'Voice Letter',   desc: 'An old photograph that blinks, smiles, looks back.',               rate: '4.9', count: '820',  price: '499', was: '799', grad: GRAD.dusk,     off: '38% off', ready: 'Ready in 6 hrs', stock: 'Only 7 left' },
  { name: 'Custom Song',    desc: "Their story, set to music. A melody they'll hum for years.",        rate: '4.8', count: '1.2K', price: '699', was: '999', grad: GRAD.emerald,  off: '30% off', ready: 'Ready in 8 hrs' },
  { name: 'Living Portrait',desc: 'An old photograph that blinks, smiles, looks back.',               rate: '4.9', count: '640',  price: '499', was: '799', grad: GRAD.rose,     off: '38% off', ready: 'Ready in 6 hrs', stock: 'Only 4 left' },
]

export const MOMENTS = ['Birthday', 'Anniversary', 'Diwali', 'Wedding', 'Rakhi', 'Graduation', 'First Salary', 'Memorial']

export type Step = { n: string; label: string; grad: string }
export const STEPS: Step[] = [
  { n: '01', label: 'Upload',   grad: GRAD.beige    },
  { n: '02', label: 'Preserve', grad: GRAD.goldwarm },
  { n: '03', label: 'Share',    grad: GRAD.night    },
]

export const WAY = [
  { ic: 'people',  h: 'Crafted by experts',           p: 'Filmmakers, writers and musicians.' },
  { ic: 'shield',  h: 'Delivered in 48 hrs–14 days',  p: 'Made by real filmmakers, writers and musicians.' },
  { ic: 'chat',    h: 'Delivered on WhatsApp',         p: 'Simple, familiar and instantly shareable.' },
  { ic: 'archive', h: 'Archived in your vault',        p: 'Re-watch on every anniversary, forever.' },
]

export type Testimonial = { quote: string; name: string; loc: string; tag: string }
export const LOVE: Testimonial[] = [
  { quote: 'Mummy roi, phir hassi. Phir 5 baar suni.',           name: 'Priya S.',  loc: 'Mumbai', tag: 'Voice Letter · 60s' },
  { quote: 'Papa kept watching it on loop the whole evening.',    name: 'Arjun M.', loc: 'Delhi',  tag: 'Memory Film · 90s' },
  { quote: 'Dadi recognised her old kitchen. We all cried.',      name: 'Neha R.',  loc: 'Pune',   tag: 'Living Portrait'   },
]

export type FAQ = { q: string; a: string }
export const FAQS: FAQ[] = [
  { q: "What if Papa doesn't use WhatsApp?",      a: "No problem. We deliver a simple private link he can open on any phone, and we can even mail a keepsake card with a QR code so he just taps and watches." },
  { q: 'Do I need to send photos?',                a: "A few photos help, but they're optional. Even a single voice note or a short description of the memory is enough for our team to begin crafting." },
  { q: 'How long does it really take?',            a: "Most pieces are ready in 48 hours. More elaborate films with original music or restoration can take up to 14 days — we'll always tell you the timeline up front." },
  { q: 'Can you do my language?',                  a: 'Yes. We work in Hindi, Telugu, Tamil, Bengali, Marathi, Punjabi and more — including mixed-language scripts the way your family actually speaks.' },
  { q: 'What happens to my voice notes and photos?', a: "They stay private and encrypted, used only to make your piece. You can ask us to delete the originals at any time, and we never share or train on your memories." },
  { q: "What if I don't love it?",                 a: "We revise until it feels right. If it still isn't the memory you imagined, you're covered by a full refund — no questions asked." },
]

export const FOOTER_MAKE = ['Film Your Memory', 'Voice Letter', 'Time Capsule', 'Legacy Vault', 'About us', 'The films']
export const FOOTER_FIND = ['hello@siyai.com', 'WhatsApp', 'Instagram']

export const D_RELATIONS = ['Maa', 'Papa', 'Dadi', 'Dadu', 'Nana', 'Nani', 'Partner', 'Someone else']
export const D_OCCASIONS = ['Birthday', 'Anniversary', 'Diwali', 'Wedding', 'Retirement', 'Just because']
export const D_LANGS     = ['Hindi', 'Telugu', 'Tamil', 'Bengali', 'Punjabi', 'Marathi', 'English', 'Mixed']
export const WA_NUMBER   = '919000000000'
