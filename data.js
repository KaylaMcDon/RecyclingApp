const CountyData = [
    {
      CO_NAME: 'PITT',
      'Material Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'PASQUOTANK',
      'Material Recovery Facility Name': 'TFC Recycling',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'LINCOLN',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'MECKLENBURG',
      'Material Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Drop-off (source-separated and single stream)'
    },
    {
      CO_NAME: 'MOORE',
      'Material Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'BLADEN',
      'Material Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'UNION',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Dual stream drop-off'
    },
    {
      CO_NAME: 'MONTGOMERY',
      'Material Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'PERSON',
      'Material Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'CABARRUS',
      'Material Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and drop-off single stream'
    },
    {
      CO_NAME: 'ASHE',
      'Material Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream and source-separated drop-off'
    },
    {
      CO_NAME: 'CLEVELAND',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'RICHMOND',
      'Material Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'IREDELL',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'ROBESON',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'GASTON',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'PERQUIMANS',
      'Material Recovery Facility Name': 'RDS',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'VANCE',
      'Material Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'CLAY',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'ALLEGHANY',
      'Material Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'PAMLICO',
      'Material Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'DUPLIN',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'PENDER',
      'Material Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'BUNCOMBE',
      'Material Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and drop-off single stream'
    },
    {
      CO_NAME: 'ALEXANDER',
      'Material Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and drop-off dual stream'
    },
    {
      CO_NAME: 'SAMPSON',
      'Material Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'ROCKINGHAM',
      'Material Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and drop-off single stream'
    },
    {
      CO_NAME: 'HYDE',
      'Material Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'BERTIE',
      'Material Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'RUTHERFORD',
      'Material Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'BRUNSWICK',
      'Material Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and drop-off single stream'
    },
    {
      CO_NAME: 'MARTIN',
      'Material Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and drop-off single stream'
    },
    {
      CO_NAME: 'MITCHELL',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'GREENE',
      'Material Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'DAVIDSON',
      'Material Recovery Facility Name': 'North Davidson Garbage Service',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'WAKE',
      'Material Recovery Facility Name': 'Waste Management - Morrisville',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'HARNETT',
      'Material Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'CHOWAN',
      'Material Recovery Facility Name': 'RDS',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'RANDOLPH',
      'Material Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'WARREN',
      'Material Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'STANLY',
      'Material Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'MADISON',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'ONSLOW',
      'Material Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'SWAIN',
      'Material Recovery Facility Name': 'Sonoco - Asheville',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'NASH',
      'Material Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'MACON',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'DAVIE',
      'Material Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and drop-off single stream'
    },
    {
      CO_NAME: 'CHEROKEE',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'LEE',
      'Material Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Dual stream drop-off'
    },
    {
      CO_NAME: 'ALAMANCE',
      'Material Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and source-separated drop-off'
    },
    {
      CO_NAME: 'HENDERSON',
      'Material Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Drop-off (source-separated and single stream)'
    },
    {
      CO_NAME: 'DURHAM',
      'Material Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and drop-off single stream'
    },
    {
      CO_NAME: 'BURKE',
      'Material Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'JACKSON',
      'Material Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Dual stream drop-off'
    },
    {
      CO_NAME: 'GRANVILLE',
      'Material Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and drop-off single stream'
    },
    {
      CO_NAME: 'HOKE',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'WILSON',
      'Material Recovery Facility Name': 'Waste Management - Morrisville',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'CALDWELL',
      'Material Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'AVERY',
      'Material Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'SURRY',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'NEW HANOVER',
      'Material Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'CURRITUCK',
      'Material Recovery Facility Name': 'RDS',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and drop-off single stream'
    },
    {
      CO_NAME: 'CATAWBA',
      'Material Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and drop-off single stream'
    },
    {
      CO_NAME: 'SCOTLAND',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'WATAUGA',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'NORTHAMPTON',
      'Material Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and drop-off single stream'
    },
    {
      CO_NAME: 'EDGECOMBE',
      'Material Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'JOHNSTON',
      'Material Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'ROWAN',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'CASWELL',
      'Material Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'CARTERET',
      'Material Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'CRAVEN',
      'Material Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and source-separated drop-off'
    },
    {
      CO_NAME: 'WASHINGTON',
      'Material Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Curbside recycling',
      'Recycling Collection': 'Curbside single stream'
    },
    {
      CO_NAME: 'GRAHAM',
      'Material Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'TRANSYLVANIA',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'COLUMBUS',
      'Material Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'STOKES',
      'Material Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'BEAUFORT',
      'Material Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'CAMDEN',
      'Material Recovery Facility Name': 'TFC Recycling',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'GUILFORD',
      'Material Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and drop-off single stream'
    },
    {
      CO_NAME: 'HERTFORD',
      'Material Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'HAYWOOD',
      'Material Recovery Facility Name': 'Sonoco - Asheville',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'MCDOWELL',
      'Material Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'JONES',
      'Material Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'WAYNE',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'CHATHAM',
      'Material Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'FORSYTH',
      'Material Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and drop-off single stream'
    },
    {
      CO_NAME: 'FRANKLIN',
      'Material Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'LENOIR',
      'Material Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'YADKIN',
      'Material Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'CUMBERLAND',
      'Material Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'TYRRELL',
      'Material Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Curbside recycling',
      'Recycling Collection': 'Curbside single stream'
    },
    {
      CO_NAME: 'POLK',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'ANSON',
      'Material Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Dual stream drop-off'
    },
    {
      CO_NAME: 'HALIFAX',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and source-separated drop-off'
    },
    {
      CO_NAME: 'GATES',
      'Material Recovery Facility Name': 'RDS',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'ORANGE',
      'Material Recovery Facility Name': 'Waste Management - Morrisville',
      'Recycling Type': 'Both curbside and drop-off recycling',
      'Recycling Collection': 'Curbside single stream and drop-off single stream'
    },
    {
      CO_NAME: 'YANCEY',
      'Material Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Source-separated drop-off'
    },
    {
      CO_NAME: 'DARE',
      'Material Recovery Facility Name': 'RDS',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    },
    {
      CO_NAME: 'WILKES',
      'Material Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Drop-off recycling',
      'Recycling Collection': 'Single stream drop-off'
    }
  ]
  
  const cityData = [
    {
      'Local Government Name': 'Aberdeen',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Ahoskie',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Alamance',
      'Materials Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Albemarle',
      'Materials Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Alliance',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Andrews',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Angier',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Ansonville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Apex',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Arapahoe',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Archdale',
      'Materials Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Archer Lodge',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Asheboro',
      'Materials Recovery Facility Name': 'North Davidson Garbage Service',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Asheville',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Askewville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Atkinson',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Atlantic Beach',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside curb-sort and drop-off dual-stream'
    },
    {
      'Local Government Name': 'Aulander',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Aurora',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Autryville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Ayden',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Badin',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Bailey',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Bakersville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside curb-sort'
    },
    {
      'Local Government Name': 'Bald Head Island',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Banner Elk',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Bath',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Bayboro',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Bear Grass',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Beaufort',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Beech Mountain',
      'Materials Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Source-separated drop-off'
    },
    {
      'Local Government Name': 'Belhaven',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Belmont',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Belville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Belwood',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Benson',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Bermuda Run',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Bessemer City',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Bethania',
      'Materials Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Bethel',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Beulaville',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside curb-sort'
    },
    {
      'Local Government Name': 'Biltmore Forest',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Biscoe',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Black Creek',
      'Materials Recovery Facility Name': 'Waste Management - Morrisville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Black Mountain',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Bladenboro',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Blowing Rock',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Boardman',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Bogue',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Boiling Spring Lakes',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Boiling Springs',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Bolivia',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Bolton',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Boone',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside (dual and single stream) and source-separated drop-off'
    },
    {
      'Local Government Name': 'Boonville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Bostic',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Brevard',
      'Materials Recovery Facility Name': 'Sonoco - Asheville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Bridgeton',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Broadway',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Brookford',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Brunswick',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Bryson City',
      'Materials Recovery Facility Name': 'Sonoco - Asheville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside curb-sort'
    },
    {
      'Local Government Name': 'Bunn',
      'Materials Recovery Facility Name': 'Waste Management - Morrisville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Burgaw',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Burlington',
      'Materials Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Burnsville',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Butner',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Cajahs Mountain',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Calabash',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Calypso',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Cameron',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Candor',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Canton',
      'Materials Recovery Facility Name': 'Sonoco - Asheville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside curb-sort'
    },
    {
      'Local Government Name': 'Cape Carteret',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Carolina Beach',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Carolina Shores',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Carrboro',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Carthage',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Cary',
      'Materials Recovery Facility Name': 'Waste Management - Morrisville',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Casar',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Castalia',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling'
    },
    {
      'Local Government Name': 'Caswell Beach',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Catawba',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Cedar Point',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Cedar Rock',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Cerro Gordo',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Chadbourn',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Chapel Hill',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Charlotte',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Cherryville',
      'Materials Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Dual stream drop-off'
    },
    {
      'Local Government Name': 'Chimney Rock',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'China Grove',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Chocowinity',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Claremont',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Clarkton',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Clayton',
      'Materials Recovery Facility Name': 'Waste Management - Morrisville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Clemmons',
      'Materials Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Cleveland',
      'Materials Recovery Facility Name': 'Republic - Mooresville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Clinton',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Drop-off single stream'
    },
    {
      'Local Government Name': 'Clyde',
      'Materials Recovery Facility Name': 'Sonoco - Asheville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Coats',
      'Materials Recovery Facility Name': 'Waste Management - Morrisville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Cofield',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside curb-sort'
    },
    {
      'Local Government Name': 'Colerain',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Columbia',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Columbus',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Como',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Concord',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Conetoe',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Connelly Springs',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Conover',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off for only cardboard'
    },
    {
      'Local Government Name': 'Conway',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Cooleemee',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Cornelius',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Cove City',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Cramerton',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Creedmoor',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Creswell',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Crossnore',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Dallas',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Danbury',
      'Materials Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Davidson',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Denton',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Dillsboro',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Dobbins Heights',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Dobson',
      'Materials Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Dortches',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Dover',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Drexel',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Dublin',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Duck',
      'Materials Recovery Facility Name': 'TFC Recycling',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Dunn',
      'Materials Recovery Facility Name': 'Waste Management - Morrisville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Durham',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Earl',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'East Arcadia',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'East Bend',
      'Materials Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'East Spencer',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Eastover',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Eden',
      'Materials Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Source-separated drop-off'
    },
    {
      'Local Government Name': 'Edenton',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Elizabeth City',
      'Materials Recovery Facility Name': 'TFC Recycling',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Elizabethtown',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Elk Park',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Elkin',
      'Materials Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Ellenboro',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Ellerbe',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Elm City',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Elon',
      'Materials Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Emerald Isle',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Enfield',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Erwin',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Eureka',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Everetts',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Fair Bluff',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Fairmont',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Fairview',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Faison',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Faith',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Falcon',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Falkland',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Fallston',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Farmville',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Fayetteville',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Flat Rock',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Fletcher',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Fontana Dam',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Forest City',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Forest Hills',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Fountain',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside curb-sort'
    },
    {
      'Local Government Name': 'Four Oaks',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Foxfire Village',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Franklin',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Franklinton',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Franklinville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Fremont',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Fuquay-Varina',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Gamewell',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Garland',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Garner',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Garysburg',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Gaston',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Gastonia',
      'Materials Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Source-separated drop-off'
    },
    {
      'Local Government Name': 'Gatesville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Gibson',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Gibsonville',
      'Materials Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Glen Alpine',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Godwin',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Goldsboro',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Goldston',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Graham',
      'Materials Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Grandfather Village',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Granite Falls',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Granite Quarry',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Grantsboro',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Green Level',
      'Materials Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Greenevers',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Greensboro',
      'Materials Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Greenville',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Grifton',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Grimesland',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside curb-sort'
    },
    {
      'Local Government Name': 'Grover',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Halifax',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Hamilton',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Hamlet',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Harmony',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Harrells',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Harrellsville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Harrisburg',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Hassell',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Havelock',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Haw River',
      'Materials Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Hayesville',
      'Materials Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside curb-sort'
    },
    {
      'Local Government Name': 'Hemby Bridge',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Henderson',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Hendersonville',
      'Materials Recovery Facility Name': 'Sonoco - Asheville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Hertford',
      'Materials Recovery Facility Name': 'RDS',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Hickory',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'High Point',
      'Materials Recovery Facility Name': 'High Point MRF',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'High Shoals',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Highlands',
      'Materials Recovery Facility Name': 'Source separated',
      'Recycling Type': 'County-run drop-off recycling',
      Recycling_Collection: 'Source-separated drop-off'
    },
    {
      'Local Government Name': 'Hildebran',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Hillsborough',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Hobgood',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Murfreesboro',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Murphy',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Nags Head',
      'Materials Recovery Facility Name': 'TFC Recycling',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Nashville',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Navassa',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'New Bern',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'New London',
      'Materials Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Newland',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Newport',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Newton',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Newton Grove',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Norlina',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Norman',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'North Topsail Beach',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'North Wilkesboro',
      'Materials Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Northwest',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Norwood',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Oak City',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Oak Island',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Oak Ridge',
      'Materials Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Oakboro',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Ocean Isle Beach',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Old Fort',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Oriental',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Orrum',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Ossipee',
      'Materials Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Oxford',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Pantego',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Parkton',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Parmele',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Patterson Springs',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Peachland',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Peletier',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Pembroke',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Pikeville',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Pilot Mountain',
      'Materials Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Pine Knoll Shores',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Pine Level',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Pinebluff',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Pinehurst',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Pinetops',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Pineville',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Pink Hill',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Pittsboro',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Pleasant Garden',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Plymouth',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Polkton',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Polkville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Pollocksville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Powellsville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Princeton',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Princeville',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside curb-sort'
    },
    {
      'Local Government Name': 'Proctorville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Raeford',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Raleigh',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Ramseur',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Randleman',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Ranlo',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Raynham',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Red Cross',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Red Oak',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Red Springs',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Reidsville',
      'Materials Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Rennert',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Rhodhiss',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Rich Square',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Richfield',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Richlands',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'River Bend',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Roanoke Rapids',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Robbins',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Robbinsville',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Robersonville',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Rockingham',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Rockwell',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Rocky Mount',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Rolesville',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Ronda',
      'Materials Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Roper',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Rose Hill',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Roseboro',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Rosman',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Rowland',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Roxboro',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Roxobel',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Rural Hall',
      'Materials Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Ruth',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Rutherford College',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Rutherfordton',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Saint Helena',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Saint James',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Saint Pauls',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Salemburg',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Salisbury',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Saluda',
      'Materials Recovery Facility Name': 'Sonoco - Asheville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Sandy Creek',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Sandyfield',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Sanford',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Saratoga',
      'Materials Recovery Facility Name': 'Waste Management - Morrisville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Sawmills',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Scotland Neck',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Seaboard',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Seagrove',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Sedalia',
      'Materials Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Selma',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Seven Devils',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Seven Springs',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Severn',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Shallotte',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Sharpsburg',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Shelby',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Siler City',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Simpson',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Sims',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling'
    },
    {
      'Local Government Name': 'Smithfield',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Source-separated drop-off and curbside program for plastics'
    },
    {
      'Local Government Name': 'Snow Hill',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Southern Pines',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Southern Shores',
      'Materials Recovery Facility Name': 'RDS',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Southport',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Sparta',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Speed',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Spencer',
      'Materials Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Source-separated drop-off'
    },
    {
      'Local Government Name': 'Spencer Mountain',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Spindale',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Spring Hope',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling'
    },
    {
      'Local Government Name': 'Spring Lake',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Spruce Pine',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Staley',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Stallings',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside dual stream'
    },
    {
      'Local Government Name': 'Stanfield',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Stanley',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Stantonsburg',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Star',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Statesville',
      'Materials Recovery Facility Name': 'Republic - Mooresville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Stedman',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Stem',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Stokesdale',
      'Materials Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Stoneville',
      'Materials Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Stonewall',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Stovall',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Sugar Mountain',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Summerfield',
      'Materials Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Sunset Beach',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Surf City',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Swansboro',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Swepsonville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Sylva',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside dual stream'
    },
    {
      'Local Government Name': 'Tabor City',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Tar Heel',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Tarboro',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Taylorsville',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Taylortown',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Teachey',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Thomasville',
      'Materials Recovery Facility Name': 'North Davidson Garbage Service',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Tobaccoville',
      'Materials Recovery Facility Name': 'North Davidson Garbage Service',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Topsail Beach',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Trent Woods',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Trenton',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Trinity',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Troutman',
      'Materials Recovery Facility Name': 'Republic - Mooresville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Troy',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Tryon',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside dual stream'
    },
    {
      'Local Government Name': 'Turkey',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Unionville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Valdese',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Vanceboro',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Vandemere',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Varnamtown',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Vass',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Waco',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream '
    },
    {
      'Local Government Name': 'Wade',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Wadesboro',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Wagram',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Wake Forest',
      'Materials Recovery Facility Name': 'Waste Management - Morrisville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Walkertown',
      'Materials Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Wallace',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Wallburg',
      'Materials Recovery Facility Name': 'North Davidson Garbage Service',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Walnut Cove',
      'Materials Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Walnut Creek',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Walstonburg',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Dual stream drop-off'
    },
    {
      'Local Government Name': 'Warrenton',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Warsaw',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Washington',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Washington Park',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Watha',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Waxhaw',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Waynesville',
      'Materials Recovery Facility Name': 'Sonoco - Asheville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Weaverville',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Webster',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Weddington',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Single stream'
    },
    {
      'Local Government Name': 'Weldon',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Wendell',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Wentworth',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Wesley Chapel',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'West Jefferson',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Whispering Pines',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Whitakers',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'White Lake',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Whiteville',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Whitsett',
      'Materials Recovery Facility Name': 'Republic - Greensboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Wilkesboro',
      'Materials Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Williamston',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Wilmington',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Wilson',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Wilsons Mills',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Windsor',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside curb-sort'
    },
    {
      'Local Government Name': 'Winfall',
      'Materials Recovery Facility Name': 'RDS',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Wingate',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Winston-Salem',
      'Materials Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Winterville',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Winton',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Woodfin',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Woodland',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Wrightsville Beach',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Yadkinville',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Yanceyville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Youngsville',
      'Materials Recovery Facility Name': 'Waste Management - Morrisville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Zebulon',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Hoffman',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Holden Beach',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Holly Ridge',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Holly Springs',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Hookerton',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Hope Mills',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Hot Springs',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Hudson',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Huntersville',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Indian Beach',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Indian Trail',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Jackson',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Jacksonville',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Jamestown',
      'Materials Recovery Facility Name': 'North Davidson Garbage Service',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Jamesville',
      'Materials Recovery Facility Name': 'ECVC',
      'Recycling Type': 'County-run curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Jefferson',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Jonesville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Kannapolis',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Kelford',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Kenansville',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Kenly',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Kernersville',
      'Materials Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Kill Devil Hills',
      'Materials Recovery Facility Name': 'RDS',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'King',
      'Materials Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Kings Mountain',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Kingstown',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Kinston',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Kittrell',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Kitty Hawk',
      'Materials Recovery Facility Name': 'RDS',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off (source-separated and single stream)'
    },
    {
      'Local Government Name': 'Knightdale',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Kure Beach',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'La Grange',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Lake Lure',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Lake Park',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Lake Santeetlah',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Lake Waccamaw',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Landis',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Lansing',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Lasker',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Lattimore',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Laurel Park',
      'Materials Recovery Facility Name': 'Sonoco - Asheville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Laurinburg',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Lawndale',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Leggett',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Leland',
      'Materials Recovery Facility Name': 'Sonoco - New Hanover',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Lenoir',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Source-separated drop-off'
    },
    {
      'Local Government Name': 'Lewiston Woodville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Lewisville',
      'Materials Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Lexington',
      'Materials Recovery Facility Name': 'North Davidson Garbage Service',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream and source-separated drop-off'
    },
    {
      'Local Government Name': 'Liberty',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Lilesville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Lillington',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Lincolnton',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Linden',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Littleton',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Locust',
      'Materials Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Long View',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Louisburg',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Love Valley',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Lowell',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Lucama',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Lumber Bridge',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Lumberton',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Macclesfield',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Macon',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Madison',
      'Materials Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Maggie Valley',
      'Materials Recovery Facility Name': 'Sonoco - Asheville',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Magnolia',
      'Materials Recovery Facility Name': 'Source separated',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Source-separated drop-off'
    },
    {
      'Local Government Name': 'Maiden',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Manteo',
      'Materials Recovery Facility Name': 'RDS',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Marietta',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Marion',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Mars Hill',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Marshall',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Marshville',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Marvin',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Matthews',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Maxton',
      'Materials Recovery Facility Name': 'Pratt',
      'Recycling Type': 'Drop-off recycling',
      Recycling_Collection: 'Single stream drop-off'
    },
    {
      'Local Government Name': 'Mayodan',
      'Materials Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Maysville',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'McAdenville',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'McDonald',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'McFarlan',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Mebane',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Mesic',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Micro',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Middleburg',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Middlesex',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Midland',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Midway',
      'Materials Recovery Facility Name': 'North Davidson Garbage Service',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Mills River',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Milton',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Mineral Springs',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Minnesott Beach',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Mint Hill',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Misenheimer',
      'Materials Recovery Facility Name': 'Waste Management - Winston Salem',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Mocksville',
      'Materials Recovery Facility Name': 'Republic - Conover',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Momeyer',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Monroe',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Montreat',
      'Materials Recovery Facility Name': 'Curbie',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Mooresboro',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Mooresville',
      'Materials Recovery Facility Name': 'Republic - Mooresville',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Morehead City',
      'Materials Recovery Facility Name': 'Sonoco - Onslow',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Morganton',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Morrisville',
      'Materials Recovery Facility Name': 'Sonoco - Raleigh',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Morven',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Mount Airy',
      'Materials Recovery Facility Name': 'GFL - Wilkesboro',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Mount Gilead',
      'Materials Recovery Facility Name': 'No recycling program'
    },
    {
      'Local Government Name': 'Mount Holly',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    },
    {
      'Local Government Name': 'Mount Olive',
      'Recycling Type': 'Both curbside and drop-off recycling',
      Recycling_Collection: 'Curbside single stream and drop-off single stream'
    },
    {
      'Local Government Name': 'Mount Pleasant',
      'Materials Recovery Facility Name': 'Mecklenburg County Recovery Facility',
      'Recycling Type': 'Curbside recycling',
      Recycling_Collection: 'Curbside single stream'
    }
  ]

export {CountyData};
export {cityData};