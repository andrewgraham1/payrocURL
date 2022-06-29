<h1>Payroc</h1>
<p>My submission for a coding exercise to payroc</p>

<h1>Setup Requirements</h1>
<ol type="1">
<li>node.js must be installed</li>
<li>docker must be installed</li>
<li>docker-compose must be installed (windows docker installer by default includes this)</li>
</ol>

<h1>Setup Frontend</h1>
<p>Open the root directory of the repo</p>
<pre>
cd payroc
</pre>
<p>Then run</p>
<pre>
npm install
</pre>
<pre>
npm run dev
</pre>
<p>Your frontend is now running and will be available at: localhost:3000</p>

<h1>Setup Backend</h1>
<p>Open the root directory of the repo</p>
<pre>
cd backend/payrocBackend
</pre>
<p>Then run</p>
<pre>
docker compose up
</pre>
<p>This will start up the PostGres database in a docker container used for this application
<pre>
npm install
</pre>
<pre>
npx prisma migrate dev --name init
</pre>
<p>This migrates our set-up to our database so everything is set-up in our database ready for use
<pre>
npm run start
</pre>
