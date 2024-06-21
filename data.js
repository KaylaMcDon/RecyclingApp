const cityNames = [
  { label: 'Aberdeen', value: 'Aberdeen' },
  { label: 'Ahoskie', value: 'Ahoskie' },
  { label: 'Alamance', value: 'Alamance' },
  { label: 'Albemarle', value: 'Albemarle' },
  { label: 'Alliance', value: 'Alliance' },
  { label: 'Andrews', value: 'Andrews' },
  { label: 'Angier', value: 'Angier' },
  { label: 'Ansonville', value: 'Ansonville' },
  { label: 'Apex', value: 'Apex' },
  { label: 'Arapahoe', value: 'Arapahoe' },
  { label: 'Archdale', value: 'Archdale' },
  { label: 'Archer Lodge', value: 'Archer Lodge' },
  { label: 'Asheboro', value: 'Asheboro' },
  { label: 'Asheville', value: 'Asheville' },
  { label: 'Askewville', value: 'Askewville' },
  { label: 'Atkinson', value: 'Atkinson' },
  { label: 'Atlantic Beach', value: 'Atlantic Beach' },
  { label: 'Aulander', value: 'Aulander' },
  { label: 'Aurora', value: 'Aurora' },
  { label: 'Autryville', value: 'Autryville' },
  { label: 'Ayden', value: 'Ayden' },
  { label: 'Badin', value: 'Badin' },
  { label: 'Bailey', value: 'Bailey' },
  { label: 'Bakersville', value: 'Bakersville' },
  { label: 'Bald Head Island', value: 'Bald Head Island' },
  { label: 'Banner Elk', value: 'Banner Elk' },
  { label: 'Bath', value: 'Bath' },
  { label: 'Bayboro', value: 'Bayboro' },
  { label: 'Bear Grass', value: 'Bear Grass' },
  { label: 'Beaufort', value: 'Beaufort' },
  { label: 'Beech Mountain', value: 'Beech Mountain' },
  { label: 'Belhaven', value: 'Belhaven' },
  { label: 'Belmont', value: 'Belmont' },
  { label: 'Belville', value: 'Belville' },
  { label: 'Belwood', value: 'Belwood' },
  { label: 'Benson', value: 'Benson' },
  { label: 'Bermuda Run', value: 'Bermuda Run' },
  { label: 'Bessemer City', value: 'Bessemer City' },
  { label: 'Bethania', value: 'Bethania' },
  { label: 'Bethel', value: 'Bethel' },
  { label: 'Beulaville', value: 'Beulaville' },
  { label: 'Biltmore Forest', value: 'Biltmore Forest' },
  { label: 'Biscoe', value: 'Biscoe' },
  { label: 'Black Creek', value: 'Black Creek' },
  { label: 'Black Mountain', value: 'Black Mountain' },
  { label: 'Bladenboro', value: 'Bladenboro' },
  { label: 'Blowing Rock', value: 'Blowing Rock' },
  { label: 'Boardman', value: 'Boardman' },
  { label: 'Bogue', value: 'Bogue' },
  { label: 'Boiling Spring Lakes', value: 'Boiling Spring Lakes' },
  { label: 'Boiling Springs', value: 'Boiling Springs' },
  { label: 'Bolivia', value: 'Bolivia' },
  { label: 'Bolton', value: 'Bolton' },
  { label: 'Boone', value: 'Boone' },
  { label: 'Boonville', value: 'Boonville' },
  { label: 'Bostic', value: 'Bostic' },
  { label: 'Brevard', value: 'Brevard' },
  { label: 'Bridgeton', value: 'Bridgeton' },
  { label: 'Broadway', value: 'Broadway' },
  { label: 'Brookford', value: 'Brookford' },
  { label: 'Brunswick', value: 'Brunswick' },
  { label: 'Bryson City', value: 'Bryson City' },
  { label: 'Bunn', value: 'Bunn' },
  { label: 'Burgaw', value: 'Burgaw' },
  { label: 'Burlington', value: 'Burlington' },
  { label: 'Burnsville', value: 'Burnsville' },
  { label: 'Butner', value: 'Butner' },
  { label: 'Cajahs Mountain', value: 'Cajahs Mountain' },
  { label: 'Calabash', value: 'Calabash' },
  { label: 'Calypso', value: 'Calypso' },
  { label: 'Cameron', value: 'Cameron' },
  { label: 'Candor', value: 'Candor' },
  { label: 'Canton', value: 'Canton' },
  { label: 'Cape Carteret', value: 'Cape Carteret' },
  { label: 'Carolina Beach', value: 'Carolina Beach' },
  { label: 'Carolina Shores', value: 'Carolina Shores' },
  { label: 'Carrboro', value: 'Carrboro' },
  { label: 'Carthage', value: 'Carthage' },
  { label: 'Cary', value: 'Cary' },
  { label: 'Casar', value: 'Casar' },
  { label: 'Castalia', value: 'Castalia' },
  { label: 'Caswell Beach', value: 'Caswell Beach' },
  { label: 'Catawba', value: 'Catawba' },
  { label: 'Cedar Point', value: 'Cedar Point' },
  { label: 'Cedar Rock', value: 'Cedar Rock' },
  { label: 'Cerro Gordo', value: 'Cerro Gordo' },
  { label: 'Chadbourn', value: 'Chadbourn' },
  { label: 'Chapel Hill', value: 'Chapel Hill' },
  { label: 'Charlotte', value: 'Charlotte' },
  { label: 'Cherryville', value: 'Cherryville' },
  { label: 'Chimney Rock', value: 'Chimney Rock' },
  { label: 'China Grove', value: 'China Grove' },
  { label: 'Chocowinity', value: 'Chocowinity' },
  { label: 'Claremont', value: 'Claremont' },
  { label: 'Clarkton', value: 'Clarkton' },
  { label: 'Clayton', value: 'Clayton' },
  { label: 'Clemmons', value: 'Clemmons' },
  { label: 'Cleveland', value: 'Cleveland' },
  { label: 'Clinton', value: 'Clinton' },
  { label: 'Clyde', value: 'Clyde' },
  { label: 'Coats', value: 'Coats' },
  { label: 'Cofield', value: 'Cofield' },
  { label: 'Colerain', value: 'Colerain' },
  { label: 'Columbia', value: 'Columbia' },
  { label: 'Columbus', value: 'Columbus' },
  { label: 'Como', value: 'Como' },
  { label: 'Concord', value: 'Concord' },
  { label: 'Conetoe', value: 'Conetoe' },
  { label: 'Connelly Springs', value: 'Connelly Springs' },
  { label: 'Conover', value: 'Conover' },
  { label: 'Conway', value: 'Conway' },
  { label: 'Cooleemee', value: 'Cooleemee' },
  { label: 'Cornelius', value: 'Cornelius' },
  { label: 'Cove City', value: 'Cove City' },
  { label: 'Cramerton', value: 'Cramerton' },
  { label: 'Creedmoor', value: 'Creedmoor' },
  { label: 'Creswell', value: 'Creswell' },
  { label: 'Crossnore', value: 'Crossnore' },
  { label: 'Dallas', value: 'Dallas' },
  { label: 'Danbury', value: 'Danbury' },
  { label: 'Davidson', value: 'Davidson' },
  { label: 'Denton', value: 'Denton' },
  { label: 'Dillsboro', value: 'Dillsboro' },
  { label: 'Dobbins Heights', value: 'Dobbins Heights' },
  { label: 'Dobson', value: 'Dobson' },
  { label: 'Dortches', value: 'Dortches' },
  { label: 'Dover', value: 'Dover' },
  { label: 'Drexel', value: 'Drexel' },
  { label: 'Dublin', value: 'Dublin' },
  { label: 'Duck', value: 'Duck' },
  { label: 'Dunn', value: 'Dunn' },
  { label: 'Durham', value: 'Durham' },
  { label: 'Earl', value: 'Earl' },
  { label: 'East Arcadia', value: 'East Arcadia' },
  { label: 'East Bend', value: 'East Bend' },
  { label: 'East Spencer', value: 'East Spencer' },
  { label: 'Eastover', value: 'Eastover' },
  { label: 'Eden', value: 'Eden' },
  { label: 'Edenton', value: 'Edenton' },
  { label: 'Elizabeth City', value: 'Elizabeth City' },
  { label: 'Elizabethtown', value: 'Elizabethtown' },
  { label: 'Elk Park', value: 'Elk Park' },
  { label: 'Elkin', value: 'Elkin' },
  { label: 'Ellenboro', value: 'Ellenboro' },
  { label: 'Ellerbe', value: 'Ellerbe' },
  { label: 'Elm City', value: 'Elm City' },
  { label: 'Elon', value: 'Elon' },
  { label: 'Emerald Isle', value: 'Emerald Isle' },
  { label: 'Enfield', value: 'Enfield' },
  { label: 'Erwin', value: 'Erwin' },
  { label: 'Eureka', value: 'Eureka' },
  { label: 'Everetts', value: 'Everetts' },
  { label: 'Fair Bluff', value: 'Fair Bluff' },
  { label: 'Fairmont', value: 'Fairmont' },
  { label: 'Fairview', value: 'Fairview' },
  { label: 'Faison', value: 'Faison' },
  { label: 'Faith', value: 'Faith' },
  { label: 'Falcon', value: 'Falcon' },
  { label: 'Falkland', value: 'Falkland' },
  { label: 'Fallston', value: 'Fallston' },
  { label: 'Farmville', value: 'Farmville' },
  { label: 'Fayetteville', value: 'Fayetteville' },
  { label: 'Flat Rock', value: 'Flat Rock' },
  { label: 'Fletcher', value: 'Fletcher' },
  { label: 'Fontana Dam', value: 'Fontana Dam' },
  { label: 'Forest City', value: 'Forest City' },
  { label: 'Forest Hills', value: 'Forest Hills' },
  { label: 'Fountain', value: 'Fountain' },
  { label: 'Four Oaks', value: 'Four Oaks' },
  { label: 'Foxfire Village', value: 'Foxfire Village' },
  { label: 'Franklin', value: 'Franklin' },
  { label: 'Franklinton', value: 'Franklinton' },
  { label: 'Franklinville', value: 'Franklinville' },
  { label: 'Fremont', value: 'Fremont' },
  { label: 'Fuquay-Varina', value: 'Fuquay-Varina' },
  { label: 'Gamewell', value: 'Gamewell' },
  { label: 'Garland', value: 'Garland' },
  { label: 'Garner', value: 'Garner' },
  { label: 'Garysburg', value: 'Garysburg' },
  { label: 'Gaston', value: 'Gaston' },
  { label: 'Gastonia', value: 'Gastonia' },
  { label: 'Gatesville', value: 'Gatesville' },
  { label: 'Gibson', value: 'Gibson' },
  { label: 'Gibsonville', value: 'Gibsonville' },
  { label: 'Glen Alpine', value: 'Glen Alpine' },
  { label: 'Godwin', value: 'Godwin' },
  { label: 'Goldsboro', value: 'Goldsboro' },
  { label: 'Goldston', value: 'Goldston' },
  { label: 'Graham', value: 'Graham' },
  { label: 'Grandfather Village', value: 'Grandfather Village' },
  { label: 'Granite Falls', value: 'Granite Falls' },
  { label: 'Granite Quarry', value: 'Granite Quarry' },
  { label: 'Grantsboro', value: 'Grantsboro' },
  { label: 'Green Level', value: 'Green Level' },
  { label: 'Greenevers', value: 'Greenevers' },
  { label: 'Greensboro', value: 'Greensboro' },
  { label: 'Greenville', value: 'Greenville' },
  { label: 'Grifton', value: 'Grifton' },
  { label: 'Grimesland', value: 'Grimesland' },
  { label: 'Grover', value: 'Grover' },
  { label: 'Halifax', value: 'Halifax' },
  { label: 'Hamilton', value: 'Hamilton' },
  { label: 'Hamlet', value: 'Hamlet' },
  { label: 'Harmony', value: 'Harmony' },
  { label: 'Harrells', value: 'Harrells' },
  { label: 'Harrellsville', value: 'Harrellsville' },
  { label: 'Harrisburg', value: 'Harrisburg' },
  { label: 'Hassell', value: 'Hassell' },
  { label: 'Havelock', value: 'Havelock' },
  { label: 'Haw River', value: 'Haw River' },
  { label: 'Hayesville', value: 'Hayesville' },
  { label: 'Hemby Bridge', value: 'Hemby Bridge' },
  { label: 'Henderson', value: 'Henderson' },
  { label: 'Hendersonville', value: 'Hendersonville' },
  { label: 'Hertford', value: 'Hertford' },
  { label: 'Hickory', value: 'Hickory' },
  { label: 'High Point', value: 'High Point' },
  { label: 'High Shoals', value: 'High Shoals' },
  { label: 'Highlands', value: 'Highlands' },
  { label: 'Hildebran', value: 'Hildebran' },
  { label: 'Hillsborough', value: 'Hillsborough' },
  { label: 'Hobgood', value: 'Hobgood' },
  { label: 'Hoffman', value: 'Hoffman' },
  { label: 'Holden Beach', value: 'Holden Beach' },
  { label: 'Holly Ridge', value: 'Holly Ridge' },
  { label: 'Holly Springs', value: 'Holly Springs' },
  { label: 'Hookerton', value: 'Hookerton' },
  { label: 'Hope Mills', value: 'Hope Mills' },
  { label: 'Hot Springs', value: 'Hot Springs' },
  { label: 'Hudson', value: 'Hudson' },
  { label: 'Huntersville', value: 'Huntersville' },
  { label: 'Indian Beach', value: 'Indian Beach' },
  { label: 'Indian Trail', value: 'Indian Trail' },
  { label: 'Jackson', value: 'Jackson' },
  { label: 'Jacksonville', value: 'Jacksonville' },
  { label: 'Jamestown', value: 'Jamestown' },
  { label: 'Jamesville', value: 'Jamesville' },
  { label: 'Jefferson', value: 'Jefferson' },
  { label: 'Jonesville', value: 'Jonesville' },
  { label: 'Kannapolis', value: 'Kannapolis' },
  { label: 'Kelford', value: 'Kelford' },
  { label: 'Kenansville', value: 'Kenansville' },
  { label: 'Kenly', value: 'Kenly' },
  { label: 'Kernersville', value: 'Kernersville' },
  { label: 'Kill Devil Hills', value: 'Kill Devil Hills' },
  { label: 'King', value: 'King' },
  { label: 'Kings Mountain', value: 'Kings Mountain' },
  { label: 'Kingstown', value: 'Kingstown' },
  { label: 'Kinston', value: 'Kinston' },
  { label: 'Kittrell', value: 'Kittrell' },
  { label: 'Kitty Hawk', value: 'Kitty Hawk' },
  { label: 'Knightdale', value: 'Knightdale' },
  { label: 'Kure Beach', value: 'Kure Beach' },
  { label: 'La Grange', value: 'La Grange' },
  { label: 'Lake Lure', value: 'Lake Lure' },
  { label: 'Lake Park', value: 'Lake Park' },
  { label: 'Lake Santeetlah', value: 'Lake Santeetlah' },
  { label: 'Lake Waccamaw', value: 'Lake Waccamaw' },
  { label: 'Landis', value: 'Landis' },
  { label: 'Lansing', value: 'Lansing' },
  { label: 'Lasker', value: 'Lasker' },
  { label: 'Lattimore', value: 'Lattimore' },
  { label: 'Laurel Park', value: 'Laurel Park' },
  { label: 'Laurinburg', value: 'Laurinburg' },
  { label: 'Lawndale', value: 'Lawndale' },
  { label: 'Leggett', value: 'Leggett' },
  { label: 'Leland', value: 'Leland' },
  { label: 'Lenoir', value: 'Lenoir' },
  { label: 'Lewiston Woodville', value: 'Lewiston Woodville' },
  { label: 'Lewisville', value: 'Lewisville' },
  { label: 'Lexington', value: 'Lexington' },
  { label: 'Liberty', value: 'Liberty' },
  { label: 'Lilesville', value: 'Lilesville' },
  { label: 'Lillington', value: 'Lillington' },
  { label: 'Lincolnton', value: 'Lincolnton' },
  { label: 'Linden', value: 'Linden' },
  { label: 'Littleton', value: 'Littleton' },
  { label: 'Locust', value: 'Locust' },
  { label: 'Long View', value: 'Long View' },
  { label: 'Louisburg', value: 'Louisburg' },
  { label: 'Love Valley', value: 'Love Valley' },
  { label: 'Lowell', value: 'Lowell' },
  { label: 'Lucama', value: 'Lucama' },
  { label: 'Lumber Bridge', value: 'Lumber Bridge' },
  { label: 'Lumberton', value: 'Lumberton' },
  { label: 'Macclesfield', value: 'Macclesfield' },
  { label: 'Macon', value: 'Macon' },
  { label: 'Madison', value: 'Madison' },
  { label: 'Maggie Valley', value: 'Maggie Valley' },
  { label: 'Magnolia', value: 'Magnolia' },
  { label: 'Maiden', value: 'Maiden' },
  { label: 'Manteo', value: 'Manteo' },
  { label: 'Marietta', value: 'Marietta' },
  { label: 'Marion', value: 'Marion' },
  { label: 'Mars Hill', value: 'Mars Hill' },
  { label: 'Marshall', value: 'Marshall' },
  { label: 'Marshville', value: 'Marshville' },
  { label: 'Marvin', value: 'Marvin' },
  { label: 'Matthews', value: 'Matthews' },
  { label: 'Maxton', value: 'Maxton' },
  { label: 'Mayodan', value: 'Mayodan' },
  { label: 'Maysville', value: 'Maysville' },
  { label: 'McAdenville', value: 'McAdenville' },
  { label: 'McDonald', value: 'McDonald' },
  { label: 'McFarlan', value: 'McFarlan' },
  { label: 'Mebane', value: 'Mebane' },
  { label: 'Mesic', value: 'Mesic' },
  { label: 'Micro', value: 'Micro' },
  { label: 'Middleburg', value: 'Middleburg' },
  { label: 'Middlesex', value: 'Middlesex' },
  { label: 'Midland', value: 'Midland' },
  { label: 'Midway', value: 'Midway' },
  { label: 'Mills River', value: 'Mills River' },
  { label: 'Milton', value: 'Milton' },
  { label: 'Mineral Springs', value: 'Mineral Springs' },
  { label: 'Minnesott Beach', value: 'Minnesott Beach' },
  { label: 'Mint Hill', value: 'Mint Hill' },
  { label: 'Misenheimer', value: 'Misenheimer' },
  { label: 'Mocksville', value: 'Mocksville' },
  { label: 'Momeyer', value: 'Momeyer' },
  { label: 'Monroe', value: 'Monroe' },
  { label: 'Montreat', value: 'Montreat' },
  { label: 'Mooresboro', value: 'Mooresboro' },
  { label: 'Mooresville', value: 'Mooresville' },
  { label: 'Morehead City', value: 'Morehead City' },
  { label: 'Morganton', value: 'Morganton' },
  { label: 'Morrisville', value: 'Morrisville' },
  { label: 'Morven', value: 'Morven' },
  { label: 'Mount Airy', value: 'Mount Airy' },
  { label: 'Mount Gilead', value: 'Mount Gilead' },
  { label: 'Mount Holly', value: 'Mount Holly' },
  { label: 'Mount Olive', value: 'Mount Olive' },
  { label: 'Mount Pleasant', value: 'Mount Pleasant' },
  { label: 'Murfreesboro', value: 'Murfreesboro' },
  { label: 'Murphy', value: 'Murphy' },
  { label: 'Nags Head', value: 'Nags Head' },
  { label: 'Nashville', value: 'Nashville' },
  { label: 'Navassa', value: 'Navassa' },
  { label: 'New Bern', value: 'New Bern' },
  { label: 'New London', value: 'New London' },
  { label: 'Newland', value: 'Newland' },
  { label: 'Newport', value: 'Newport' },
  { label: 'Newton', value: 'Newton' },
  { label: 'Newton Grove', value: 'Newton Grove' },
  { label: 'Norlina', value: 'Norlina' },
  { label: 'Norman', value: 'Norman' },
  { label: 'North Topsail Beach', value: 'North Topsail Beach' },
  { label: 'North Wilkesboro', value: 'North Wilkesboro' },
  { label: 'Northwest', value: 'Northwest' },
  { label: 'Norwood', value: 'Norwood' },
  { label: 'Oak City', value: 'Oak City' },
  { label: 'Oak Island', value: 'Oak Island' },
  { label: 'Oak Ridge', value: 'Oak Ridge' },
  { label: 'Oakboro', value: 'Oakboro' },
  { label: 'Ocean Isle Beach', value: 'Ocean Isle Beach' },
  { label: 'Old Fort', value: 'Old Fort' },
  { label: 'Oriental', value: 'Oriental' },
  { label: 'Orrum', value: 'Orrum' },
  { label: 'Ossipee', value: 'Ossipee' },
  { label: 'Oxford', value: 'Oxford' },
  { label: 'Pantego', value: 'Pantego' },
  { label: 'Parkton', value: 'Parkton' },
  { label: 'Parmele', value: 'Parmele' },
  { label: 'Patterson Springs', value: 'Patterson Springs' },
  { label: 'Peachland', value: 'Peachland' },
  { label: 'Peletier', value: 'Peletier' },
  { label: 'Pembroke', value: 'Pembroke' },
  { label: 'Pikeville', value: 'Pikeville' },
  { label: 'Pilot Mountain', value: 'Pilot Mountain' },
  { label: 'Pine Knoll Shores', value: 'Pine Knoll Shores' },
  { label: 'Pine Level', value: 'Pine Level' },
  { label: 'Pinebluff', value: 'Pinebluff' },
  { label: 'Pinehurst', value: 'Pinehurst' },
  { label: 'Pinetops', value: 'Pinetops' },
  { label: 'Pineville', value: 'Pineville' },
  { label: 'Pink Hill', value: 'Pink Hill' },
  { label: 'Pittsboro', value: 'Pittsboro' },
  { label: 'Pleasant Garden', value: 'Pleasant Garden' },
  { label: 'Plymouth', value: 'Plymouth' },
  { label: 'Polkton', value: 'Polkton' },
  { label: 'Polkville', value: 'Polkville' },
  { label: 'Pollocksville', value: 'Pollocksville' },
  { label: 'Powellsville', value: 'Powellsville' },
  { label: 'Princeton', value: 'Princeton' },
  { label: 'Princeville', value: 'Princeville' },
  { label: 'Proctorville', value: 'Proctorville' },
  { label: 'Raeford', value: 'Raeford' },
  { label: 'Raleigh', value: 'Raleigh' },
  { label: 'Ramseur', value: 'Ramseur' },
  { label: 'Randleman', value: 'Randleman' },
  { label: 'Ranlo', value: 'Ranlo' },
  { label: 'Raynham', value: 'Raynham' },
  { label: 'Red Cross', value: 'Red Cross' },
  { label: 'Red Oak', value: 'Red Oak' },
  { label: 'Red Springs', value: 'Red Springs' },
  { label: 'Reidsville', value: 'Reidsville' },
  { label: 'Rennert', value: 'Rennert' },
  { label: 'Rhodhiss', value: 'Rhodhiss' },
  { label: 'Rich Square', value: 'Rich Square' },
  { label: 'Richfield', value: 'Richfield' },
  { label: 'Richlands', value: 'Richlands' },
  { label: 'River Bend', value: 'River Bend' },
  { label: 'Roanoke Rapids', value: 'Roanoke Rapids' },
  { label: 'Robbins', value: 'Robbins' },
  { label: 'Robbinsville', value: 'Robbinsville' },
  { label: 'Robersonville', value: 'Robersonville' },
  { label: 'Rockingham', value: 'Rockingham' },
  { label: 'Rockwell', value: 'Rockwell' },
  { label: 'Rocky Mount', value: 'Rocky Mount' },
  { label: 'Rolesville', value: 'Rolesville' },
  { label: 'Ronda', value: 'Ronda' },
  { label: 'Roper', value: 'Roper' },
  { label: 'Rose Hill', value: 'Rose Hill' },
  { label: 'Roseboro', value: 'Roseboro' },
  { label: 'Rosman', value: 'Rosman' },
  { label: 'Rowland', value: 'Rowland' },
  { label: 'Roxboro', value: 'Roxboro' },
  { label: 'Roxobel', value: 'Roxobel' },
  { label: 'Rural Hall', value: 'Rural Hall' },
  { label: 'Ruth', value: 'Ruth' },
  { label: 'Rutherford College', value: 'Rutherford College' },
  { label: 'Rutherfordton', value: 'Rutherfordton' },
  { label: 'Saint Helena', value: 'Saint Helena' },
  { label: 'Saint James', value: 'Saint James' },
  { label: 'Saint Pauls', value: 'Saint Pauls' },
  { label: 'Salemburg', value: 'Salemburg' },
  { label: 'Salisbury', value: 'Salisbury' },
  { label: 'Saluda', value: 'Saluda' },
  { label: 'Sandy Creek', value: 'Sandy Creek' },
  { label: 'Sandyfield', value: 'Sandyfield' },
  { label: 'Sanford', value: 'Sanford' },
  { label: 'Saratoga', value: 'Saratoga' },
  { label: 'Sawmills', value: 'Sawmills' },
  { label: 'Scotland Neck', value: 'Scotland Neck' },
  { label: 'Seaboard', value: 'Seaboard' },
  { label: 'Seagrove', value: 'Seagrove' },
  { label: 'Sedalia', value: 'Sedalia' },
  { label: 'Selma', value: 'Selma' },
  { label: 'Seven Devils', value: 'Seven Devils' },
  { label: 'Seven Springs', value: 'Seven Springs' },
  { label: 'Severn', value: 'Severn' },
  { label: 'Shallotte', value: 'Shallotte' },
  { label: 'Sharpsburg', value: 'Sharpsburg' },
  { label: 'Shelby', value: 'Shelby' },
  { label: 'Siler City', value: 'Siler City' },
  { label: 'Simpson', value: 'Simpson' },
  { label: 'Sims', value: 'Sims' },
  { label: 'Smithfield', value: 'Smithfield' },
  { label: 'Snow Hill', value: 'Snow Hill' },
  { label: 'Southern Pines', value: 'Southern Pines' },
  { label: 'Southern Shores', value: 'Southern Shores' },
  { label: 'Southport', value: 'Southport' },
  { label: 'Sparta', value: 'Sparta' },
  { label: 'Speed', value: 'Speed' },
  { label: 'Spencer', value: 'Spencer' },
  { label: 'Spencer Mountain', value: 'Spencer Mountain' },
  { label: 'Spindale', value: 'Spindale' },
  { label: 'Spring Hope', value: 'Spring Hope' },
  { label: 'Spring Lake', value: 'Spring Lake' },
  { label: 'Spruce Pine', value: 'Spruce Pine' },
  { label: 'Staley', value: 'Staley' },
  { label: 'Stallings', value: 'Stallings' },
  { label: 'Stanfield', value: 'Stanfield' },
  { label: 'Stanley', value: 'Stanley' },
  { label: 'Stantonsburg', value: 'Stantonsburg' },
  { label: 'Star', value: 'Star' },
  { label: 'Statesville', value: 'Statesville' },
  { label: 'Stedman', value: 'Stedman' },
  { label: 'Stem', value: 'Stem' },
  { label: 'Stokesdale', value: 'Stokesdale' },
  { label: 'Stoneville', value: 'Stoneville' },
  { label: 'Stonewall', value: 'Stonewall' },
  { label: 'Stovall', value: 'Stovall' },
  { label: 'Sugar Mountain', value: 'Sugar Mountain' },
  { label: 'Summerfield', value: 'Summerfield' },
  { label: 'Sunset Beach', value: 'Sunset Beach' },
  { label: 'Surf City', value: 'Surf City' },
  { label: 'Swansboro', value: 'Swansboro' },
  { label: 'Swepsonville', value: 'Swepsonville' },
  { label: 'Sylva', value: 'Sylva' },
  { label: 'Tabor City', value: 'Tabor City' },
  { label: 'Tar Heel', value: 'Tar Heel' },
  { label: 'Tarboro', value: 'Tarboro' },
  { label: 'Taylorsville', value: 'Taylorsville' },
  { label: 'Taylortown', value: 'Taylortown' },
  { label: 'Teachey', value: 'Teachey' },
  { label: 'Thomasville', value: 'Thomasville' },
  { label: 'Tobaccoville', value: 'Tobaccoville' },
  { label: 'Topsail Beach', value: 'Topsail Beach' },
  { label: 'Trent Woods', value: 'Trent Woods' },
  { label: 'Trenton', value: 'Trenton' },
  { label: 'Trinity', value: 'Trinity' },
  { label: 'Troutman', value: 'Troutman' },
  { label: 'Troy', value: 'Troy' },
  { label: 'Tryon', value: 'Tryon' },
  { label: 'Turkey', value: 'Turkey' },
  { label: 'Unionville', value: 'Unionville' },
  { label: 'Valdese', value: 'Valdese' },
  { label: 'Vanceboro', value: 'Vanceboro' },
  { label: 'Vandemere', value: 'Vandemere' },
  { label: 'Varnamtown', value: 'Varnamtown' },
  { label: 'Vass', value: 'Vass' },
  { label: 'Waco', value: 'Waco' },
  { label: 'Wade', value: 'Wade' },
  { label: 'Wadesboro', value: 'Wadesboro' },
  { label: 'Wagram', value: 'Wagram' },
  { label: 'Wake Forest', value: 'Wake Forest' },
  { label: 'Walkertown', value: 'Walkertown' },
  { label: 'Wallace', value: 'Wallace' },
  { label: 'Wallburg', value: 'Wallburg' },
  { label: 'Walnut Cove', value: 'Walnut Cove' },
  { label: 'Walnut Creek', value: 'Walnut Creek' },
  { label: 'Walstonburg', value: 'Walstonburg' },
  { label: 'Warrenton', value: 'Warrenton' },
  { label: 'Warsaw', value: 'Warsaw' },
  { label: 'Washington', value: 'Washington' },
  { label: 'Washington Park', value: 'Washington Park' },
  { label: 'Watha', value: 'Watha' },
  { label: 'Waxhaw', value: 'Waxhaw' },
  { label: 'Waynesville', value: 'Waynesville' },
  { label: 'Weaverville', value: 'Weaverville' },
  { label: 'Webster', value: 'Webster' },
  { label: 'Weddington', value: 'Weddington' },
  { label: 'Weldon', value: 'Weldon' },
  { label: 'Wendell', value: 'Wendell' },
  { label: 'Wentworth', value: 'Wentworth' },
  { label: 'Wesley Chapel', value: 'Wesley Chapel' },
  { label: 'West Jefferson', value: 'West Jefferson' },
  { label: 'Whispering Pines', value: 'Whispering Pines' },
  { label: 'Whitakers', value: 'Whitakers' },
  { label: 'White Lake', value: 'White Lake' },
  { label: 'Whiteville', value: 'Whiteville' },
  { label: 'Whitsett', value: 'Whitsett' },
  { label: 'Wilkesboro', value: 'Wilkesboro' },
  { label: 'Williamston', value: 'Williamston' },
  { label: 'Wilmington', value: 'Wilmington' },
  { label: 'Wilson', value: 'Wilson' },
  { label: 'Wilsons Mills', value: 'Wilsons Mills' },
  { label: 'Windsor', value: 'Windsor' },
  { label: 'Winfall', value: 'Winfall' },
  { label: 'Wingate', value: 'Wingate' },
  { label: 'Winston-Salem', value: 'Winston-Salem' },
  { label: 'Winterville', value: 'Winterville' },
  { label: 'Winton', value: 'Winton' },
  { label: 'Woodfin', value: 'Woodfin' },
  { label: 'Woodland', value: 'Woodland' },
  { label: 'Wrightsville Beach', value: 'Wrightsville Beach' },
  { label: 'Yadkinville', value: 'Yadkinville' },
  { label: 'Yanceyville', value: 'Yanceyville' },
  { label: 'Youngsville', value: 'Youngsville' },
  { label: 'Zebulon', value: 'Zebulon' },
];

const countyNames = [
  { label: 'Alamance', value: 'ALAMANCE' },
  { label: 'Alexander', value: 'ALEXANDER' },
  { label: 'Alleghany', value: 'ALLEGHANY' },
  { label: 'Anson', value: 'ANSON' },
  { label: 'Ashe', value: 'ASHE' },
  { label: 'Avery', value: 'AVERY' },
  { label: 'Beaufort', value: 'BEAUFORT' },
  { label: 'Bertie', value: 'BERTIE' },
  { label: 'Bladen', value: 'BLADEN' },
  { label: 'Brunswick', value: 'BRUNSWICK' },
  { label: 'Buncombe', value: 'BUNCOMBE' },
  { label: 'Burke', value: 'BURKE' },
  { label: 'Cabarrus', value: 'CABARRUS' },
  { label: 'Caldwell', value: 'CALDWELL' },
  { label: 'Camden', value: 'CAMDEN' },
  { label: 'Carteret', value: 'CARTERET' },
  { label: 'Caswell', value: 'CASWELL' },
  { label: 'Catawba', value: 'CATAWBA' },
  { label: 'Chatham', value: 'CHATHAM' },
  { label: 'Cherokee', value: 'CHEROKEE' },
  { label: 'Chowan', value: 'CHOWAN' },
  { label: 'Clay', value: 'CLAY' },
  { label: 'Cleveland', value: 'CLEVELAND' },
  { label: 'Columbus', value: 'COLUMBUS' },
  { label: 'Craven', value: 'CRAVEN' },
  { label: 'Cumberland', value: 'CUMBERLAND' },
  { label: 'Currituck', value: 'CURRITUCK' },
  { label: 'Dare', value: 'DARE' },
  { label: 'Davidson', value: 'DAVIDSON' },
  { label: 'Davie', value: 'DAVIE' },
  { label: 'Duplin', value: 'DUPLIN' },
  { label: 'Durham', value: 'DURHAM' },
  { label: 'Edgecombe', value: 'EDGECOMBE' },
  { label: 'Forsyth', value: 'FORSYTH' },
  { label: 'Franklin', value: 'FRANKLIN' },
  { label: 'Gaston', value: 'GASTON' },
  { label: 'Gates', value: 'GATES' },
  { label: 'Graham', value: 'GRAHAM' },
  { label: 'Granville', value: 'GRANVILLE' },
  { label: 'Greene', value: 'GREENE' },
  { label: 'Guilford', value: 'GUILFORD' },
  { label: 'Halifax', value: 'HALIFAX' },
  { label: 'Harnett', value: 'HARNETT' },
  { label: 'Haywood', value: 'HAYWOOD' },
  { label: 'Henderson', value: 'HENDERSON' },
  { label: 'Hertford', value: 'HERTFORD' },
  { label: 'Hoke', value: 'HOKE' },
  { label: 'Hyde', value: 'HYDE' },
  { label: 'Iredell', value: 'IREDELL' },
  { label: 'Jackson', value: 'JACKSON' },
  { label: 'Johnston', value: 'JOHNSTON' },
  { label: 'Jones', value: 'JONES' },
  { label: 'Lee', value: 'LEE' },
  { label: 'Lenoir', value: 'LENOIR' },
  { label: 'Lincoln', value: 'LINCOLN' },
  { label: 'Macon', value: 'MACON' },
  { label: 'Madison', value: 'MADISON' },
  { label: 'Martin', value: 'MARTIN' },
  { label: 'Mcdowell', value: 'MCDOWELL' },
  { label: 'Mecklenburg', value: 'MECKLENBURG' },
  { label: 'Mitchell', value: 'MITCHELL' },
  { label: 'Montgomery', value: 'MONTGOMERY' },
  { label: 'Moore', value: 'MOORE' },
  { label: 'Nash', value: 'NASH' },
  { label: 'New Hanover', value: 'NEW HANOVER' },
  { label: 'Northampton', value: 'NORTHAMPTON' },
  { label: 'Onslow', value: 'ONSLOW' },
  { label: 'Orange', value: 'ORANGE' },
  { label: 'Pamlico', value: 'PAMLICO' },
  { label: 'Pasquotank', value: 'PASQUOTANK' },
  { label: 'Pender', value: 'PENDER' },
  { label: 'Perquimans', value: 'PERQUIMANS' },
  { label: 'Person', value: 'PERSON' },
  { label: 'Pitt', value: 'PITT' },
  { label: 'Polk', value: 'POLK' },
  { label: 'Randolph', value: 'RANDOLPH' },
  { label: 'Richmond', value: 'RICHMOND' },
  { label: 'Robeson', value: 'ROBESON' },
  { label: 'Rockingham', value: 'ROCKINGHAM' },
  { label: 'Rowan', value: 'ROWAN' },
  { label: 'Rutherford', value: 'RUTHERFORD' },
  { label: 'Sampson', value: 'SAMPSON' },
  { label: 'Scotland', value: 'SCOTLAND' },
  { label: 'Stanly', value: 'STANLY' },
  { label: 'Stokes', value: 'STOKES' },
  { label: 'Surry', value: 'SURRY' },
  { label: 'Swain', value: 'SWAIN' },
  { label: 'Transylvania', value: 'TRANSYLVANIA' },
  { label: 'Tyrrell', value: 'TYRRELL' },
  { label: 'Union', value: 'UNION' },
  { label: 'Vance', value: 'VANCE' },
  { label: 'Wake', value: 'WAKE' },
  { label: 'Warren', value: 'WARREN' },
  { label: 'Washington', value: 'WASHINGTON' },
  { label: 'Watauga', value: 'WATAUGA' },
  { label: 'Wayne', value: 'WAYNE' },
  { label: 'Wilkes', value: 'WILKES' },
  { label: 'Wilson', value: 'WILSON' },
  { label: 'Yadkin', value: 'YADKIN' },
  { label: 'Yancey', value: 'YANCEY' },
];

const countyData = [
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
];
  
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
];

const recyclingData = [
  {
    "Facility Name": "Curbie",
    "Plastic": "Bottles, tubs, jugs, and jars. \nNo pumps \nEmpty and rinse",
    "Metal": "Metal cans \nEmpty and rinse",
    "Glass": "Bottles and jars \nEmpty and rinse",
    "Paper": "Paper, cartons, and cardboard \nFlatten cardboard",
    "Other banned": ["All batteries (car, lithium, etc.)", "Ceramic items", "Clothing or textiles", "Diapers", "Disposable cups (plastic and paper)", "Electronics", "Food-tainted items", "Hazardous waste", "Household glass", "Medical waste", "Plastic bags/wrap", "Plastic clamshell", "containers", "Scrap metal/wood", "Shredded paper", "Styrofoam/peanuts", "Tanglers (cords, hoses, wires, etc.)", "Tires", "Toys",
]},
  {
    "Facility Name": "ECVC",
    "Plastic": "Water, soda, juice, milk and detergent bottles \nNo pumps \nEmpty out",
    "Metal": "All cans \nempty out",
    "Glass": "Glass is not recyclable at this location",
    "Paper": "Newspaper, office paper, and cardboard \nFlatten cardboard",
    "Other banned": "",
  },
  {
    "Facility Name": "GFL",
    "Plastic": "Bottles, tubs, jugs, and jars. \nNo pumps \nEmpty and rinse",
    "Metal": "Metal cans \nEmpty and rinse",
    "Glass": "Bottles and jars \nEmpty and rinse",
    "Paper": "Paper and cardboard \nFlatten cardboard",
    "Other banned": ["Aersol cans", "All batteries (car, lithium, etc.)", "Ceramic items", "Clothing or textiles", "Diapers", "Disposable cups (plastic and paper)", "Electronics", "Food-tainted items", "Hazardous waste", "Household glass", "Medical waste", "Plastic bags/wrap", "containers", "Scrap metal/wood", "Shredded paper", "Styrofoam/peanuts", "Tanglers (cords, hoses, wires, etc.)", "Tires", "Toys",
  ]},
  {
    "Facility Name": "High Point",
    "Plastic": "Bottles, tubs, jugs, and jars. \nNo pumps \nEmpty and rinse",
    "Metal": "Metal cans \nEmpty and rinse",
    "Glass": "Bottles and jars \nEmpty and rinse",
    "Paper": "Paper and cardboard \nFlatten cardboard",
    "Other banned": ["Aersol cans", "All batteries (car, lithium, etc.)", "Ceramic items", "Clothing or textiles", "Diapers", "Disposable cups (plastic and paper)", "Electronics", "Food-tainted items", "Hazardous waste", "Household glass", "Medical waste", "Plastic bags/wrap", "containers", "Scrap metal/wood", "Shredded paper", "Styrofoam/peanuts", "Tanglers (cords, hoses, wires, etc.)", "Tires", "Toys",
  ]},
  {
    "Facility Name": "MecklenburgCounty",
    "Plastic": "Bottles, jugs, and jars. \nNo caps, lids, or pumps \nEmpty and rinse",
    "Metal": "Metal cans \nEmpty and rinse",
    "Glass": "Bottles and jars \nEmpty and rinse",
    "Paper": "Paper, cartons, and cardboard \nFlatten cardboard",
    "Other banned": ["All batteries (car, lithium, etc.)", "Ceramic items", "Clothing or textiles", "Diapers", "Disposable cups (plastic and paper)", "Electronics", "Food-tainted items", "Hazardous waste", "Household glass", "Medical waste", "Plastic bags/wrap", "containers", "Scrap metal/wood", "Shredded paper", "Styrofoam/peanuts", "Tanglers (cords, hoses, wires, etc.)", "Tires", "Toys",
  ]},
  {
    "Facility Name": "NorthDavidson",
    "Plastic": "Bottles, tubs, jugs, and jars. \nNo pumps \nEmpty and rinse",
    "Metal": "Metal cans \nEmpty and rinse",
    "Glass": "Bottles and jars \nEmpty and rinse",
    "Paper": "Paper, aseptic cartons, and cardboard \nFlatten cardboard",
    "Other banned": ["Aersol cans", "All batteries (car, lithium, etc.)", "Ceramic items", "Clothing or textiles", "Diapers", "Electronics", "Food-tainted items", "Hazardous waste", "Household glass", "Medical waste", "Plastic bags/wrap", "containers", "Scrap metal/wood", "Shredded paper", "Styrofoam/peanuts", "Tanglers (cords, hoses, wires, etc.)", "Tires", "Toys",
  ]},
  {
    "Facility Name": "Pratt",
    "Plastic": "Bottles, tubs, jugs, and jars. \nNo pumps \nEmpty and rinse",
    "Metal": "Metal cans \nEmpty and rinse",
    "Glass": "Glass is not recyclable at this location",
    "Paper": "Paper, cartons,  and cardboard \nFlatten cardboard",
    "Other banned": ["Aersol cans", "All batteries (car, lithium, etc.)", "Ceramic items", "Clothing or textiles", "Diapers", "Disposable cups (plastic and paper)", "Electronics", "Food-tainted items", "Hazardous waste", "Household glass", "Medical waste", "Plastic bags/wrap", "containers", "Scrap metal/wood", "Shredded paper", "Styrofoam/peanuts", "Tanglers (cords, hoses, wires, etc.)", "Tires", "Toys",
  ]},
  {
    "Facility Name": "RDS",
    "Plastic": "Bottles, jugs, and jars. \nNo pumps \nEmpty and rinse",
    "Metal": "Metal cans \nEmpty and rinse",
    "Glass": "Glass is not recyclable at this location",
    "Paper": "Paper, cartons,  and cardboard \nFlatten cardboard",
    "Other banned": ["Aersol cans", "All batteries (car, lithium, etc.)", "Ceramic items", "Clothing or textiles", "Diapers", "Disposable cups (plastic and paper)", "Electronics", "Food-tainted items", "Hazardous waste", "Household glass", "Medical waste", "Plastic bags/wrap", "containers", "Scrap metal/wood", "Shredded paper", "Styrofoam/peanuts", "Tanglers (cords, hoses, wires, etc.)", "Tires", "Toys",
  ]},
  {
    "Facility Name": "RepublicConover",
    "Plastic": "Bottles, tubs, jugs, and jars. \nNo pumps \nEmpty and rinse",
    "Metal": "Metal cans \nEmpty and rinse",
    "Glass": "Bottles and jars \nEmpty and rinse",
    "Paper": "Paper, cartons, and cardboard \nFlatten cardboard",
    "Other banned": ["Aersol cans", "All batteries (car, lithium, etc.)", "Ceramic items", "Clothing or textiles", "Diapers", "Disposable cups (plastic and paper)", "Electronics", "Food-tainted items", "Hazardous waste", "Household glass", "Medical waste", "Plastic bags/wrap", "containers", "Scrap metal/wood", "Shredded paper", "Styrofoam/peanuts", "Tanglers (cords, hoses, wires, etc.)", "Tires", "Toys",
  ]},
  {
    "Facility Name": "RepublicGreensboro",
    "Plastic": "Bottles, tubs, jugs, and jars. \nNo caps, lids, or pumps \nEmpty and rinse",
    "Metal": "Metal cans \nEmpty and rinse",
    "Glass": "Bottles and jars \nNo metal lids \nEmpty and rinse",
    "Paper": "Paper, and cardboard \nFlatten cardboard",
    "Other banned": ["Aersol cans", "All batteries (car, lithium, etc.)", "Ceramic items", "Clothing or textiles", "Diapers", "Disposable cups (plastic and paper)", "Electronics", "Food-tainted items", "Hazardous waste", "Household glass", "Medical waste", "Plastic bags/wrap", "containers", "Scrap metal/wood", "Shredded paper", "Styrofoam/peanuts", "Tanglers (cords, hoses, wires, etc.)", "Tires", "Toys",
  ]},
  {
    "Facility Name": "RepublicMooresville",
    "Plastic": "Bottles, jugs, and jars. \nNo pumps \nEmpty and rinse",
    "Metal": "Metal cans \nEmpty and rinse",
    "Glass": "Glass is not recyclable at this location",
    "Paper": "Paper, cartons, and cardboard \nFlatten cardboard",
    "Other banned": ["Aersol cans", "All batteries (car, lithium, etc.)", "Ceramic items", "Clothing or textiles", "Diapers", "Disposable cups (plastic and paper)", "Electronics", "Food-tainted items", "Hazardous waste", "Household glass", "Medical waste", "Plastic bags/wrap", "containers", "Scrap metal/wood", "Shredded paper", "Styrofoam/peanuts", "Tanglers (cords, hoses, wires, etc.)", "Tires", "Toys",
  ]},
  {
    "Facility Name": "Sonoco",
    "Plastic": "Bottles, tubs, jugs, and jars. \nNo pumps \nEmpty and rinse",
    "Metal": "Metal cans \nEmpty and rinse",
    "Glass": "Bottles and jars \nEmpty and rinse",
    "Paper": "Paper, cartons, and cardboard \nFlatten cardboard",
    "Other banned": ["Aersol cans", "All batteries (car, lithium, etc.)", "Aluminnum foil", "Ceramic items", "Clothing or textiles", "Diapers", "Electronics", "Food-tainted items", "Hazardous waste", "Household glass", "Medical waste", "Plastic bags/wrap", "containers", "Scrap metal/wood", "Shredded paper", "Styrofoam/peanuts", "Tanglers (cords, hoses, wires, etc.)", "Tires", "Toys",
  ]},
  {
    "Facility Name": "TFC",
    "Plastic": "Bottles and jugs. \nNo pumps \nEmpty and rinse",
    "Metal": "Metal cans \nEmpty and rinse",
    "Glass": "Bottles and jars \nEmpty and rinse",
    "Paper": "Paper, cartons, and cardboard \nFlatten cardboard",
    "Other banned": ["Aersol cans", "All batteries (car, lithium, etc.)", "Ceramic items", "Clothing or textiles", "Diapers", "Disposable cups (plastic and paper)", "Electronics", "Food-tainted items", "Hazardous waste", "Household glass", "Medical waste", "Plastic bags/wrap", "containers", "Scrap metal/wood", "Shredded paper", "Styrofoam/peanuts", "Tanglers (cords, hoses, wires, etc.)", "Tires", "Toys",
  ]},
  {
    "Facility Name": "RepublicConover",
    "Plastic": "Bottles, tubs, jugs, and jars. \nNo pumps \nEmpty and rinse",
    "Metal": "Metal cans \nEmpty and rinse",
    "Glass": "Bottles and jars \nEmpty and rinse",
    "Paper": "Paper, cartons, and cardboard \nFlatten cardboard",
    "Other banned": ["Aersol cans", "All batteries (car, lithium, etc.)", "Ceramic items", "Clothing or textiles", "Diapers", "Disposable cups (plastic and paper)", "Electronics", "Food-tainted items", "Hazardous waste", "Household glass", "Medical waste", "Plastic bags/wrap", "containers", "Scrap metal/wood", "Shredded paper", "Styrofoam/peanuts", "Tanglers (cords, hoses, wires, etc.)", "Tires", "Toys",
  ]},
]

export { cityNames, countyNames, countyData, cityData, recyclingData };