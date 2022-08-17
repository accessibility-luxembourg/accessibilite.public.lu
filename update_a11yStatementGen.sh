git clone https://github.com/accessibility-luxembourg/a11yStatementGen.git tmp_stmtgen
cp tmp_stmtgen/src/files/template-decla-fr.docx src/files/general
cp tmp_stmtgen/src/js/*.js src/js/
cp tmp_stmtgen/src/tpl/decla_*.ejs tmp_stmtgen/src/tpl/decla-form.ejs src/tpl
rm -rf tmp_stmtgen

