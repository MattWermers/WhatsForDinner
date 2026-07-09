from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def overview():
    return render_template('about.html', title="WfD - Project Overview")

@app.route('/team')
def team_page():
    return render_template('team.html', title="WfD - The Team")

@app.route('/WhatsForDinner')
def wfd_tool():
    return render_template('WhatsForDinner.html', title="Whats for Dinner")

@app.route('/docs')
def docs_page():
    return render_template('docs.html', title="WfD - Docs")

if __name__ == '__main__':
    app.run(debug=True)