<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html" />
<xsl:template match="/">

<html>
<head>
	<title>Information</title>
	<style>
	body{
		background-image: url("img/bg.png");
		background-repeat: repeat;
		height:800px;
	}
	</style>
</head>
<body>
	<br/><br/><br/><br/>
<xsl:for-each select="information/record">
<strong style="margin-left:20px;background-color:#686868;padding:1px 6px; border:0px; border-radius:2px;color:#ffffff; font-family:Calibri; "><xsl:value-of select="name"/></strong>

  <div style="list-style-type: none;margin-top:10px;margin-left:25px; color:#303030; font-family:Calibri; width:500px "><xsl:value-of select="explanation"/></div>
  <div style="list-style-type: none;margin-left:25px; font-family:Calibri">URL: <a style="text-decoration:none; color:#2688f5;"><xsl:attribute name="href"><xsl:value-of select="URL" /></xsl:attribute><xsl:value-of select="URL"/></a></div>
  <xsl:for-each select="category">
	<div style="width:100%;display:inline">
        <div style="font-family:Calibri; margin-top:10px;margin-left:25px; width:45px;background-color:#e4edf4; padding:2px 6px; border:0px; border-radius:3px; color:#3e6d8e"><xsl:value-of select="tag1"/>
	</div>
	<div style="font-family:Calibri; margin-top:10px;margin-left:25px;width:70px;background-color:#e4edf4; padding:2px 6px; border:0px; border-radius:3px; color:#3e6d8e"><xsl:value-of select="tag2"/>
	</div>
	<div style="font-family:Calibri; margin-top:10px;margin-left:25px;width:40px;background-color:#e4edf4; padding:2px 6px; border:0px; border-radius:3px; color:#3e6d8e"><xsl:value-of select="tag3"/>
	</div>
</div>
  </xsl:for-each><br/><br/>

</xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
