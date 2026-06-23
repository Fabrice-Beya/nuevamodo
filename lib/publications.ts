export type PublicationBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string };

export interface Publication {
  slug: string;
  title: string;
  date: string;
  time: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  content: PublicationBlock[];
}

export const PUBLICATIONS: Publication[] = [
  {
    slug: "nano-material-cleaning-future-of-electrical-equipment-cleaning",
    title:
      "Nano-Material Cleaning Technology: The Future of Electrical Equipment Cleaning",
    date: "July 6, 2021",
    time: "11:43 am",
    category: "Nano-Material Cleaning Technology",
    excerpt:
      "As an owner of expensive electrical equipment, keeping machines clean from dirt, dust, grime, and oil is crucial to their lifespan — and nano-material cleaning technology is the uniquely engineered solution.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Electrician inspecting an electrical distribution panel",
    imageCredit: "Photo by Unsplash",
    content: [
      {
        type: "paragraph",
        text: "As an owner of expensive electrical equipment, you’re probably aware of how difficult it is to effectively keep these machines clean from the build-up of dirt, dust, grime, and oil.",
      },
      {
        type: "paragraph",
        text: "However, keeping this equipment clean is crucial to its lifespan.",
      },
      {
        type: "paragraph",
        text: "Build-ups of dirt often bring on an onslaught of premature problems. These may include an increase in energy consumption, which is costly and harmful on an environmental scale, an unwanted temperature rise that can prove dangerous to both operators and equipment, electrostatic inductions, and sticky coils and contacts.",
      },
      {
        type: "paragraph",
        text: "So, what’s the solution? Nano-material cleaning technology is uniquely engineered and is thoroughly researched to deliver great results. It successfully addresses the well-known industry problem in electrical engineering where deep cleaning of equipment is usually a no-go zone due to several factors. These include the reality of continuous operations with limited time for cleaning, health and safety risks, the emergence of secondary problems, and access constraints.",
      },
      {
        type: "paragraph",
        text: "Below, we touch on some of the key benefits of using this cleaning technology as a solution for any electrical or electronic equipment.",
      },
      { type: "heading", text: "Quick & Efficient" },
      {
        type: "paragraph",
        text: "Tried and tested in over 11 countries worldwide, this cleaning solution promises the avoidance of threatening setbacks regardless of how significant the dirt buildup might be. This innovative, safe-to-use technology removes dust and dirt quickly and without hassle, allowing you to work better with increased efficiency and free of disruption.",
      },
      { type: "heading", text: "Odourless" },
      {
        type: "paragraph",
        text: "There’s nothing more unpleasant than cleaning solutions that smell of harmful chemicals. Having an odourless product makes using it painless and hassle-free. It also suggests that the product contains no harmful chemicals that could be potentially dangerous for direct human contact.",
      },
      { type: "heading", text: "Non-Corrosive" },
      {
        type: "paragraph",
        text: "When designing a technology that holds the responsibility of aiding and not posing damage to expensive electrical and electronic equipment, a huge aspect to consider and ensure is that it cannot be corrosive. Knowing that this product will not cause rust or decay is a huge win, allowing you to work stress-free and confident that the lifespan of your equipment is not under threat.",
      },
      { type: "heading", text: "Non-Flammable" },
      {
        type: "paragraph",
        text: "A major benefit to the nano-material cleaning solution is that you’re safeguarded against the risk of fire. This non-flammable solution is safe to use in all electrical environments, which will aid in the process of storing equipment. It will also make a wider range of usage available, and ensure the safety of your equipment and your workers.",
      },
      { type: "heading", text: "Non-Toxic" },
      {
        type: "paragraph",
        text: "Cleaning solutions for multiple purposes often come with the risk of being highly toxic if inhaled, ingested or when coming into contact with the eyes, nose or mouth. Major health problems have been associated with several highly toxic yet commonly used products. These include but are not limited to respiratory issues, allergic reactions, headaches, and even cancer.",
      },
      {
        type: "paragraph",
        text: "The nano-material cleaning aid is completely non-toxic and is safe to use. This makes it ideal for frequent or on-the-spot use.",
      },
      { type: "heading", text: "Non-Conductive" },
      {
        type: "paragraph",
        text: "Having a non-conductive cleaning solution is essential to the performance of the electrical equipment post-application. Non-conductive solutions will ensure that equipment stays in a safe temperature range for usage. Over-heating equipment can cause incredible damage. If the circuit overheats the risks include fire, explosion and injury.",
      },
      {
        type: "paragraph",
        text: "Damage caused by overheating is usually irreparable and can only be solved by replacing various components, which can be a timely and expensive process to undertake.",
      },
      { type: "heading", text: "Neutral PH" },
      {
        type: "paragraph",
        text: "Neutral PH levels in the cleaning solution ensure that any worker coming into contact with the solution is at minimal risk of skin irritation or worse. Solutions with significantly high or low PH levels have the potential to be dangerous to humans. This threat occurs if the solution comes into contact with the skin, is inhaled, or ingested. Solutions with high alkaline levels or acidity levels should be used with great caution as they run the risk of causing severe skin burns. This is why using a trusted product that does not pose major physical threats in high-volume work environments is imperative to worker health and safety. It also encourages higher levels of productivity and fewer unwanted setbacks.",
      },
      {
        type: "paragraph",
        text: "The nano-material cleaning technology promises to eliminate dust from equipment, reduce temperature, restore insulation and create a safer working environment for all. There is nothing else like it on the market!",
      },
      {
        type: "paragraph",
        text: "At Nueva Modo, we are striving to change the world by challenging and tackling electrical engineering and industrial problems. We want to help you with your electrical problems. To inquire, get in touch with us today.",
      },
    ],
  },
  {
    slug: "electrical-equipment-maintenance-is-a-must",
    title: "Compelling Reasons Why Electrical Equipment Maintenance Is A Must",
    date: "September 30, 2021",
    time: "4:01 pm",
    category: "Nano-Material Cleaning Technology",
    excerpt:
      "Owning expensive electrical and electronic equipment comes with a tremendous responsibility to ensure that it lasts at its capacity for the duration of its lifespan.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Engineer performing maintenance on industrial electrical equipment",
    imageCredit: "Photo by Unsplash",
    content: [
      {
        type: "paragraph",
        text: "Owning expensive electrical and electronic equipment comes with a tremendous responsibility to ensure that it lasts at its capacity for the duration of its lifespan.",
      },
      {
        type: "paragraph",
        text: "There is the old saying that goes, ‘an apple a day keeps the doctor away’. In other words, to maintain a healthy mind and body, a good quality diet is essential. The same goes for your heavy-duty equipment – without a consistent care regime in practice, the functioning of the machines will deteriorate more rapidly.",
      },
      {
        type: "paragraph",
        text: "However, this process often falls to the backseat because this kind of equipment is not just challenging and dangerous to clean in many cases, but the downtime can affect productivity. These few shortfalls are among several compelling reasons why every operator should prioritise keeping their heavy-duty electrical and electronic equipment clean. We discuss some of these benefits below.",
      },
      { type: "heading", text: "Prevents Corrosion" },
      {
        type: "paragraph",
        text: "Once a machine begins corroding, reversing the damage caused is a tedious and near to impossible task. Furthermore, water and moisture are not the only two culprits for causing corrosion on machinery. The exposure of electrical components where temperature, humidity and atmospheric pollutants are uncontrolled can also be held responsible for issues ensuing.",
      },
      {
        type: "paragraph",
        text: "If you leave these substances on your equipment for too long, they may cause severe technical issues. Therefore, keeping all machinery clean will corrode at a much slower rate than a dirty one.",
      },
      { type: "heading", text: "Improved Safety" },
      {
        type: "paragraph",
        text: "A poorly maintained body of equipment presents a significant safety hazard to your team. Dust, grime, and contaminant buildup will inevitably lead to malfunctioning electrical systems and other mechanical issues, which can be a threat and danger to your workers.",
      },
      {
        type: "paragraph",
        text: "When your workers show up, they have the right to assume that all the equipment they operate is safe to use and not a threat to their lives. To ensure this, owners and managers of teams must prioritise regular maintenance and cleaning of all equipment.",
      },
      { type: "heading", text: "Increases Productivity" },
      {
        type: "paragraph",
        text: "Defective equipment is going to slow down productivity and harm your bottom line, period. There is no point in trying to save time and other resources by forcing teams to work with neglected equipment because when defects occ and either need repairing or replacement, it will only slow your processes down in the long run.",
      },
      {
        type: "paragraph",
        text: "By consistently tending to any debris buildup, you can avoid this happening while only sparing minimal fractions of operational time.",
      },
      { type: "heading", text: "Reflects Positively On Your Business" },
      {
        type: "paragraph",
        text: "Word travels fast, and potential customers will likely not want to implement your services if they hear that your equipment is not well maintained. When people pay money for a service, they expect reliability, quality, and a high standard of workmanship all around, which encompasses the state of the electronics used by your company.",
      },
      {
        type: "paragraph",
        text: "Do not harm your company image by not tending to the state of your equipment. People will remember you as being neglectful, which will undoubtedly reflect poorly on your reputation moving forward. On the other hand, if customers enjoy their experience and take note of your high levels of professionalism, they will spread a positive word about your company and help it in its organic growth.",
      },
      {
        type: "paragraph",
        text: "Cleaning your company electronics is vital if you want to maintain a safe work environment, a happy team of workers, a satisfied customer base, and save money on malfunctioning or broken electrical equipment.",
      },
      {
        type: "paragraph",
        text: "Safety always comes first, and to ensure that maintaining your equipment is safe and effective, we have created a nano-material cleaning technology. This cleaning solution has been tested in 11 countries and is highly effective for removing dust, dirt, and grime particles that can build up on heavy-duty machinery and cause the onset of premature technical issues.",
      },
      {
        type: "paragraph",
        text: "We can also assist you with other concerns related to electrical and electronic equipment. Ready to find new, innovative solutions to the complex electrical engineering issues facing your business? Get in touch with us today.",
      },
    ],
  },
  {
    slug: "kzn-riots-electrical-equipment-affected",
    title: "KZN Riots: Was Your Electrical Equipment Affected?",
    date: "August 27, 2021",
    time: "3:08 pm",
    category: "Nano-Material Cleaning Technology",
    excerpt:
      "Mid-July saw unrest across KwaZulu-Natal and other parts of South Africa — and the wave of debris, dust, and smoke may have affected crucial electrical equipment long after the visible damage was cleared.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Electrical technician working on industrial power equipment",
    imageCredit: "Photo by Unsplash",
    content: [
      {
        type: "paragraph",
        text: "Mid-July saw unrest and upheaval as KwaZulu-Natal and other parts of South Africa were in the grips of violent riots and looting.",
      },
      {
        type: "paragraph",
        text: "These incidents caused physical damage beyond belief to the local stores, shopping malls, and infrastructure. The attacks in KZN alone, which also included acts of arson, in total cost the economy more than R20 million and has placed more than 150 000 jobs in the province at risk.",
      },
      {
        type: "paragraph",
        text: "An estimated 40 000 formal businesses and around 50 000 informal traders with no insurance to lean on were affected by the violent outburst born from socio-economic outrage.",
      },
      {
        type: "paragraph",
        text: "Most damage is evident with burnt buildings, storefronts destroyed, and stolen goods, but what about the damage that cannot be seen at face value? These kinds of attacks cause a wave of debris, dust, and smoke, which, in turn, will have adverse effects on crucial electrical equipment.",
      },
      {
        type: "paragraph",
        text: "Companies that heavily rely on this equipment to carry out business operations are at risk for premature damage and systems failure. This damage could cost millions of rands to repair and abruptly halt productivity timelines. To prevent this, company owners should tend to their equipment immediately with thorough inspection and cleaning.",
      },
      {
        type: "paragraph",
        text: "When performing these emergency cleanups, implementing premium cleaning technology will ensure that the task is carried out safely for the bodies working the job and the equipment.",
      },
      {
        type: "paragraph",
        text: "Nano-material cleaning technology is a reliable and safe solution for cleaning heavy-duty electrical engineering equipment. Let’s take a more detailed look at why this is below.",
      },
      { type: "heading", text: "Highly Efficient At Removing Dust Build-Up" },
      {
        type: "paragraph",
        text: "The burning of infrastructure brought a wave of dust that can settle on electrical equipment causing several problems. A thick layer of dust can act as an insulator and cause higher power chips and devices to overheat. It can attract moisture and cause electrical leakage, shorting and opening of PCBs under various conditions. Furthermore, a conductive electrolyte film can form that may degrade the surface insulation resistance between the conductors. It can also affect the contact in relays, switches and connectors and cause arcing and carbon tracking in higher voltage apps. In a nutshell, the above consequences will make the equipment significantly harder to service in the long run.",
      },
      {
        type: "paragraph",
        text: "The nano-technology can prevent all of this from occurring.",
      },
      { type: "heading", text: "Eliminates Noise" },
      {
        type: "paragraph",
        text: "Is your engineering equipment making an unsettling noise? Usually, it’s best to avoid letting the machinery reach this point. However, the significance of the riots caused unprecedented damage to the entire province and will require a significant amount of South Africa’s resources to repair. Therefore, it is no surprise that your equipment may have taken a knock causing it to act up prematurely.",
      },
      {
        type: "paragraph",
        text: "It is best to address this with efficient and effective cleaning solutions as early as possible to avoid long term damage. The nano-material technology is a solution that promises to eliminate dust from equipment, reduce temperatures, restore insulation, increase wind speeds in inlets and outlets, reduce noise, and eliminate static.",
      },
      { type: "heading", text: "Non-Conductive" },
      {
        type: "paragraph",
        text: "Due to the non-conductive nature of the nano-material solution, it is a safe option to use in the workplace. These features will ensure that when you are working on your potentially impaired machine, the solution in use will safeguard against the risk of overheating, resulting in fires, explosions, injury, and even death.",
      },
      {
        type: "paragraph",
        text: "The consequence of ignoring unsettling sounds is irreversible, so act fast and do the right thing with cleaning technology that is reliable, safe to use, and efficient.",
      },
      {
        type: "paragraph",
        text: "The KZN riots were not only devastating to the community, but they were also devastating to the companies that rely on industrial equipment to operate their daily business. This damage will be a timely affair to clean up, and the entire reconstruction could take years due to the enormous costs and lack of funding.",
      },
      {
        type: "paragraph",
        text: "Company owners should start thinking about clever solutions to clean the electrical equipment they rely on to keep their operations running. With safety being a high priority, consider implementing nano-material technology to start cleaning your heavy-duty equipment safely and thoroughly.",
      },
      {
        type: "paragraph",
        text: "Nueva Modo is a team of passionate specialists that aim to provide new ways to tackle electrical engineering problems. If you’re looking for a quick, easy, and effective way to clean your electrical equipment, nano-technology is the ideal solution, and we can provide it to you today. So why not get in touch with us and start immediately? Contact us today for yours.",
      },
    ],
  },
];

export function getPublicationBySlug(slug: string): Publication | undefined {
  return PUBLICATIONS.find((publication) => publication.slug === slug);
}
