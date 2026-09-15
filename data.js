window.coreBlueData={
  sources:[
    {id:'conveyor',title:'E-commerce Conveyor Control System',note:'Modular conveyor controls, sensors, drive integration, and HMI concepts.',url:'https://literature.rockwellautomation.com/idc/groups/literature/documents/wp/ssb-wp008_-en-p.pdf'},
    {id:'powerflex',title:'Connect PowerFlex 525 over EtherNet/IP',note:'Logix5000 device connection and communication guidance.',url:'https://literature.rockwellautomation.com/idc/groups/literature/documents/qs/iasimp-qs036_-en-p.pdf'},
    {id:'faceplate',title:'PowerFlex Drives: FactoryTalk View Faceplates',note:'Standardised HMI faceplate setup and operation.',url:'https://support.rockwellautomation.com/app/answers/answer_view/a_id/1049774'}
  ],
  components:[
    {id:'hmi',icon:'H',name:'Operator HMI',model:'FactoryTalk View',role:'Gives operators visibility of conveyor state, drive diagnostics, and approved controls.',configuration:'Standard PowerFlex faceplate linked to controller tags.',connections:'Reads and writes approved control tags through the CompactLogix controller.',evidence:'faceplate'},
    {id:'plc',icon:'P',name:'Control PLC',model:'CompactLogix',role:'Coordinates conveyor logic, permissives, interlocks, and communication with connected equipment.',configuration:'Hosts the drive interface and conveyor control logic.',connections:'Connected to HMI and PowerFlex 525 over EtherNet/IP.',evidence:'powerflex'},
    {id:'drive',icon:'D',name:'Variable-speed drive',model:'PowerFlex 525',role:'Controls motor speed and reports drive state and faults.',configuration:'Configured as an EtherNet/IP device in the Logix5000 project.',connections:'Receives control data from CompactLogix and supplies power to the conveyor motor.',evidence:'powerflex'},
    {id:'motor',icon:'M',name:'Conveyor motor',model:'Material movement',role:'Moves product through the conveyor line.',configuration:'Speed is governed by the connected variable-speed drive.',connections:'Mechanical load driven by the PowerFlex 525.',evidence:'conveyor'},
    {id:'sensor',icon:'S',name:'Photo-eye sensors',model:'Interlock input',role:'Provide product-presence or obstruction signals to the control logic.',configuration:'Input signal can prevent conveyor operation when an interlock condition is active.',connections:'Reports to the PLC. Its installed purpose needs internal confirmation.',evidence:'conveyor',gap:true}
  ],
  decisions:[
    {title:'Drive control uses EtherNet/IP',status:'documented',summary:'The controller exchanges drive control and status data with the PowerFlex drive over the plant network.',source:'powerflex'},
    {title:'Standard drive faceplate used on the HMI',status:'documented',summary:'The operator screen uses standardised tags to expose drive state, faults, and speed commands.',source:'faceplate'},
    {title:'Photo-eye sensor stops the conveyor',status:'gap',summary:'The interlock is visible, but public source material does not explain the installed business or safety reason for this specific stop condition.',source:'conveyor'}
  ],
  update:{title:'PowerFlex 525 firmware and compatibility notice',date:'Example monitored update',summary:'A manufacturer update may change supported firmware combinations or EtherNet/IP configuration behaviour.',affected:'PowerFlex 525 drive and CompactLogix connection configuration',checks:'Record installed versions, check compatibility guidance, agree rollback steps, and obtain controls-engineer approval before change.',source:'powerflex'}
};