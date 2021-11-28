interface Button {
  name: string;
  text_en: string;
  text_cs: string;
  text_zhCN: string;
  color: string;
}

const buttons: Button[] = [
  { name: 'yes', text_en: 'Yes', text_cs: 'Ano', text_zhCN: '是', color: '#1b5e20' },
  { name: 'no', text_en: 'No', text_cs: 'Ne', text_zhCN: '否', color: '#b71c1c' },
  {
    name: 'nostate',
    text_en: "The state shouldn't exist",
    text_cs: 'Stát by neměl existovat.',
    text_zhCN: '国家不应该存在',
    color: '#000000',
  },
  {
    name: 'conditional',
    text_en: 'Conditional',
    text_cs: 'Podmínečné',
    text_zhCN: '有条件的',
    color: '#0a8f00',
  },
  {
    name: 'unconditional',
    text_en: 'Unconditional',
    text_cs: 'Nepodmínečné',
    text_zhCN: '无条件的',
    color: '#e0d500',
  },
  {
    name: 'capitalism',
    text_en: 'Capitalism',
    text_cs: 'Kapitalismus',
    text_zhCN: '资本主义',
    color: '#e0d500',
  },
  {
    name: 'corporatism',
    text_en: 'Corporatism',
    text_cs: 'Korporatismus',
    text_zhCN: '法团主义',
    color: '#75530e',
  },
  {
    name: 'workers',
    text_en: 'Workers',
    text_cs: 'Dělníci',
    text_zhCN: '工人们',
    color: '#ff0000',
  },
  { name: 'unions', text_en: 'Unions', text_cs: 'Odbory', text_zhCN: '工会', color: '#ff0000' },
  { name: 'state', text_en: 'State', text_cs: 'Stát', text_zhCN: '国家', color: '#852013' },
  {
    name: 'electoralism',
    text_en: 'Electoralism',
    text_cs: 'Elektoralismus',
    text_zhCN: '选举',
    color: '#c210ad',
  },
  {
    name: 'revolution',
    text_en: 'Revolution',
    text_cs: 'Revoluce',
    text_zhCN: '革命',
    color: '#ff0000',
  },
  {
    name: 'welfare',
    text_en: 'Welfare',
    text_cs: 'Socialní dávky',
    text_zhCN: '社会福利',
    color: '#ff0000',
  },
  {
    name: 'noneed',
    text_en: 'Not needed',
    text_cs: 'Není potřeba',
    text_zhCN: '不需要',
    color: '#f5dd00',
  },
  { name: 'dasein', text_en: 'Dasein', text_cs: 'Dasen', text_zhCN: '人的本性', color: '#000000' },
  {
    name: 'classnation',
    text_en: 'Class/Nation',
    text_cs: 'Třída/Národ',
    text_zhCN: '阶级 / 国家',
    color: '#cd0000',
  },
];

export default buttons;
