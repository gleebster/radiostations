# сюда выдачу stage1.js
thing = [] # [ ["name", "link"], ["name", "link"] ]
	
import codecs # unicode fix

f = codecs.open("radiopotok.m3u8", "w", "utf-8")
f.write("#EXTM3U\r\n")
for a in thing:
	f.write("#EXTINF:0," + a[0] + "\r\n")
	f.write(a[1] + "\r\n")
f.close()
