# Veri-Safe
## Description
An application to document vehicle license plates that are recorded with on-site
cameras, checking against databases of OK'd plate numbers and keeping track of
unknown numbers, warning users in the case of repeat unknowns.

## Origins
This project was done at Swift during a two day hackathon by Samia Jrab,
Sean Perts, Victoria Parodi, Amber Davis, and I. We did not win but it was said
to be a close competition between all participants, and either way we all
learned a lot.

## Future Use
While this project is an interesting idea, and could easily improve the security
of many companies, not just swift, It *is* a hackathon project, and thus is
fairly quickly put together and should be redone before it sees any real-world
use.

Some easily identifiable problems include:
- Susceptible to SQL injection
- 3 nodejs applications that must be running for full functionality
- An api continuously putting out updated views of the database
- Poorly implemented dashboard
- Oddly laid out database tables

On the plus side, much of this is fixed by really planning out how the program
works, and writing the dashboard from scratch or starting with it.

## Running 

The first and most important dependency is the open-source *Automatic License
Plate Reader* program, which can be 
[read about and installed here](www.github.com/openalpr/openalpr).
 
In order to run this monstrosity of a program, you first need to install all
npm dependencies, and run the `database.sql` against your postgresql database.

From here you have a choice, you can run `filewatcher.js` to add plates to the
database once you move an image into the `imgin/` folder, or forego that step,
as it is not required to be running for the rest of the program to function.

The final step is to run *both* `otherserver.js` as well as `server.js`. **but**
`otherserver.js` *must be run first*. this is the part that exposes the api that
server.js reads from to populate the dashboard. If `server.js` is run first then
it will just crash, so it should be obvious when things are done wrong.

This program was tested **only** on debian linux, and even here it had problems,
I would reccomend against using this program in any way in it's current state.
