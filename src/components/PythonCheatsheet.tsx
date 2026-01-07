import CheatsheetSection from "./CheatsheetSection";
import CodeBlock from "./CodeBlock";

const PythonCheatsheet = () => {
  const sections = [
    {
      id: "intro",
      letter: "a",
      title: "Introduction à Python",
      subsections: [
        {
          title: "Domaines d'application",
          content: (
            <div className="space-y-2 text-sm">
              <p>Python est utilisé dans de nombreux domaines :</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><strong>Data Science & Machine Learning</strong> - NumPy, Pandas, Scikit-learn, TensorFlow</li>
                <li><strong>Développement Web</strong> - Django, Flask, FastAPI</li>
                <li><strong>Automatisation & Scripting</strong> - Scripts système, web scraping</li>
                <li><strong>Intelligence Artificielle</strong> - Réseaux de neurones, NLP</li>
                <li><strong>Développement de jeux</strong> - Pygame</li>
              </ul>
            </div>
          ),
        },
        {
          title: "Environnement de développement",
          content: (
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">IDEs populaires pour Python :</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><strong>VS Code</strong> - Léger, extensible, gratuit</li>
                <li><strong>PyCharm</strong> - IDE complet pour Python</li>
                <li><strong>Jupyter Notebook</strong> - Idéal pour Data Science</li>
                <li><strong>IDLE</strong> - Environnement intégré avec Python</li>
              </ul>
            </div>
          ),
        },
        {
          title: "Installation et configuration",
          content: (
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">Téléchargez Python depuis <strong>python.org</strong></p>
              <CodeBlock code={`# Vérifier l'installation
python --version
# ou
python3 --version

# Installer un package avec pip
pip install nom_package`} />
            </div>
          ),
        },
        {
          title: "Mode interpréteur",
          content: (
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">Lancez l'interpréteur avec la commande <code className="bg-burgundy-muted px-1.5 py-0.5 rounded">python</code></p>
              <CodeBlock code={`>>> print("Bonjour!")
Bonjour!
>>> 2 + 2
4
>>> exit()  # Pour quitter`} />
            </div>
          ),
        },
        {
          title: "Commentaires & Indentation",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Ceci est un commentaire sur une ligne

"""
Ceci est un commentaire
sur plusieurs lignes (docstring)
"""

# L'indentation définit les blocs (4 espaces)
if condition:
    instruction1  # Bloc if
    instruction2
instruction3  # Hors du bloc if`} />
            </div>
          ),
        },
      ],
    },
    {
      id: "variables",
      letter: "b",
      title: "Variables et Types de Données",
      subsections: [
        {
          title: "Types de variables",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Types numériques
entier = 42           # int
decimal = 3.14        # float
complexe = 2 + 3j     # complex

# Types texte et booléen
texte = "Bonjour"     # str
vrai = True           # bool
faux = False          # bool

# Collections
liste = [1, 2, 3]     # list
tuple_ = (1, 2, 3)    # tuple
ensemble = {1, 2, 3}  # set
dico = {"a": 1}       # dict

# Type spécial
rien = None           # NoneType`} />
            </div>
          ),
        },
        {
          title: "Nommage des variables",
          content: (
            <div className="space-y-2 text-sm">
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Commence par une lettre ou underscore (_)</li>
                <li>Contient lettres, chiffres, underscores</li>
                <li>Sensible à la casse (<code>age</code> ≠ <code>Age</code>)</li>
                <li>Convention : <code>snake_case</code> pour les variables</li>
              </ul>
              <CodeBlock code={`# Valide
mon_age = 25
_private = True
NOM_CONSTANTE = 3.14

# Invalide
2nombre = 10   # Commence par un chiffre
mon-nom = "x"  # Contient un tiret`} />
            </div>
          ),
        },
        {
          title: "Fonction type() et Transtypage",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Connaître le type
x = 42
print(type(x))  # <class 'int'>

# Transtypage (conversion de type)
str(42)      # "42"
int("42")    # 42
float("3.14") # 3.14
list("abc")  # ['a', 'b', 'c']
bool(1)      # True
bool(0)      # False`} />
            </div>
          ),
        },
        {
          title: "Variantes de l'affectation",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Affectation simple
x = 10

# Affectation multiple
a, b, c = 1, 2, 3

# Affectation en chaîne
x = y = z = 0

# Échange de valeurs
a, b = b, a

# Affectation augmentée
x += 5   # x = x + 5
x -= 3   # x = x - 3
x *= 2   # x = x * 2
x /= 4   # x = x / 4`} />
            </div>
          ),
        },
        {
          title: "Opérateurs",
          content: (
            <div className="space-y-3 text-sm">
              <p className="font-medium text-foreground">Arithmétiques :</p>
              <CodeBlock code={`+   # Addition
-   # Soustraction
*   # Multiplication
/   # Division (float)
//  # Division entière
%   # Modulo (reste)
**  # Puissance`} />
              <p className="font-medium text-foreground">Comparaison :</p>
              <CodeBlock code={`==  # Égal
!=  # Différent
<   # Inférieur
>   # Supérieur
<=  # Inférieur ou égal
>=  # Supérieur ou égal`} />
              <p className="font-medium text-foreground">Logiques :</p>
              <CodeBlock code={`and  # ET logique
or   # OU logique
not  # NON logique`} />
            </div>
          ),
        },
      ],
    },
    {
      id: "io",
      letter: "c",
      title: "Fonctions d'Entrée/Sortie",
      subsections: [
        {
          title: "Fonction print()",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Affichage simple
print("Bonjour le monde!")

# Plusieurs valeurs
print("Nom:", nom, "Age:", age)

# Paramètres optionnels
print("A", "B", sep="-")    # A-B
print("Fin", end="")        # Sans saut de ligne`} />
            </div>
          ),
        },
        {
          title: "Écriture formatée (f-strings)",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`nom = "Alice"
age = 25

# F-strings (Python 3.6+)
print(f"Je m'appelle {nom} et j'ai {age} ans")

# Expressions dans f-strings
print(f"Dans 10 ans: {age + 10}")

# Formatage de nombres
pi = 3.14159
print(f"Pi = {pi:.2f}")      # Pi = 3.14
print(f"Total: {100:>10}")   # Aligné à droite
print(f"Hex: {255:x}")       # ff`} />
            </div>
          ),
        },
        {
          title: "Écriture scientifique",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`nombre = 1234567.89

print(f"{nombre:e}")    # 1.234568e+06
print(f"{nombre:.2e}")  # 1.23e+06

# Notation fixe
print(f"{nombre:,.2f}") # 1,234,567.89`} />
            </div>
          ),
        },
        {
          title: "Ancienne méthode (% et format)",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Opérateur % (ancien style)
print("Nom: %s, Age: %d" % (nom, age))
print("Pi: %.2f" % 3.14159)

# Méthode format()
print("Nom: {}, Age: {}".format(nom, age))
print("Pi: {:.2f}".format(3.14159))
print("{0} et {1}".format("A", "B"))`} />
            </div>
          ),
        },
        {
          title: "Fonction input()",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Saisie utilisateur (retourne str)
nom = input("Votre nom: ")

# Conversion si nécessaire
age = int(input("Votre âge: "))
taille = float(input("Votre taille: "))`} />
            </div>
          ),
        },
      ],
    },
    {
      id: "control",
      letter: "d",
      title: "Instructions de Contrôle",
      subsections: [
        {
          title: "Instructions if / elif / else",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Condition simple
if age >= 18:
    print("Majeur")

# if...else
if age >= 18:
    print("Majeur")
else:
    print("Mineur")

# if...elif...else
if note >= 16:
    print("Très bien")
elif note >= 14:
    print("Bien")
elif note >= 12:
    print("Assez bien")
else:
    print("À améliorer")

# Expression conditionnelle (ternaire)
resultat = "Pair" if x % 2 == 0 else "Impair"`} />
            </div>
          ),
        },
        {
          title: "Boucle for et range()",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Parcours de séquence
for lettre in "Python":
    print(lettre)

# Avec range()
for i in range(5):      # 0, 1, 2, 3, 4
    print(i)

for i in range(2, 8):   # 2, 3, 4, 5, 6, 7
    print(i)

for i in range(0, 10, 2):  # 0, 2, 4, 6, 8
    print(i)

# Avec enumerate()
for i, val in enumerate(liste):
    print(f"Index {i}: {val}")`} />
            </div>
          ),
        },
        {
          title: "break, continue, else",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# break - sortir de la boucle
for i in range(10):
    if i == 5:
        break
    print(i)  # 0, 1, 2, 3, 4

# continue - passer à l'itération suivante
for i in range(5):
    if i == 2:
        continue
    print(i)  # 0, 1, 3, 4

# else - exécuté si pas de break
for i in range(5):
    if i == 10:
        break
else:
    print("Boucle terminée normalement")`} />
            </div>
          ),
        },
        {
          title: "Instructions pass, match, while",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# pass - instruction vide (placeholder)
if condition:
    pass  # À implémenter plus tard

# match (Python 3.10+)
match commande:
    case "start":
        demarrer()
    case "stop":
        arreter()
    case _:
        print("Commande inconnue")

# while
compteur = 0
while compteur < 5:
    print(compteur)
    compteur += 1`} />
            </div>
          ),
        },
        {
          title: "Gestion des exceptions",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`try:
    resultat = 10 / 0
except ZeroDivisionError:
    print("Division par zéro!")
except (TypeError, ValueError) as e:
    print(f"Erreur: {e}")
else:
    print("Pas d'erreur")
finally:
    print("Toujours exécuté")

# Lever une exception
raise ValueError("Message d'erreur")`} />
            </div>
          ),
        },
      ],
    },
    {
      id: "lists",
      letter: "e",
      title: "Les Listes",
      subsections: [
        {
          title: "Opérations sur les listes",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Création
liste = [1, 2, 3, 4, 5]
vide = []
mixte = [1, "deux", 3.0, True]

# Accès par index
premier = liste[0]    # 1
dernier = liste[-1]   # 5

# Modification
liste[0] = 10

# Opérateurs
len(liste)           # Longueur
3 in liste           # Appartenance
liste + [6, 7]       # Concaténation
liste * 2            # Répétition`} />
            </div>
          ),
        },
        {
          title: "Tranches (slicing)",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`liste = [0, 1, 2, 3, 4, 5]

liste[1:4]    # [1, 2, 3]
liste[:3]     # [0, 1, 2]
liste[3:]     # [3, 4, 5]
liste[::2]    # [0, 2, 4] (pas de 2)
liste[::-1]   # [5, 4, 3, 2, 1, 0] (inversé)

# Modification par tranche
liste[1:3] = [10, 20]`} />
            </div>
          ),
        },
        {
          title: "Méthodes de listes",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`liste.append(x)     # Ajouter à la fin
liste.insert(i, x)  # Insérer à l'index i
liste.extend([...]) # Étendre avec une liste
liste.remove(x)     # Supprimer première occurrence
liste.pop()         # Retirer et retourner le dernier
liste.pop(i)        # Retirer et retourner l'index i
liste.clear()       # Vider la liste
liste.index(x)      # Index de x
liste.count(x)      # Compter les occurrences
liste.sort()        # Trier en place
liste.reverse()     # Inverser en place
liste.copy()        # Copie superficielle`} />
            </div>
          ),
        },
        {
          title: "Listes imbriquées",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Matrice 2D
matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Accès
matrice[0][1]  # 2 (ligne 0, colonne 1)

# Parcours
for ligne in matrice:
    for element in ligne:
        print(element)`} />
            </div>
          ),
        },
        {
          title: "Compréhension de listes",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Syntaxe: [expression for item in iterable if condition]

# Exemples
carres = [x**2 for x in range(10)]
pairs = [x for x in range(20) if x % 2 == 0]
mots_maj = [m.upper() for m in mots]

# Imbriquée
matrice = [[j for j in range(3)] for i in range(3)]`} />
            </div>
          ),
        },
        {
          title: "Algorithmes de tri",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Tri intégré
liste.sort()              # Tri en place
liste.sort(reverse=True)  # Tri décroissant
sorted(liste)             # Retourne nouvelle liste triée

# Tri personnalisé
liste.sort(key=len)       # Par longueur
liste.sort(key=str.lower) # Insensible à la casse

# Tri de dictionnaires
eleves.sort(key=lambda x: x['note'])`} />
            </div>
          ),
        },
      ],
    },
    {
      id: "containers",
      letter: "f",
      title: "Containers : Dictionnaires, Tuples, Sets",
      subsections: [
        {
          title: "Dictionnaires",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Création
dico = {"nom": "Alice", "age": 25}
vide = {}
autre = dict(nom="Bob", age=30)

# Accès et modification
dico["nom"]           # "Alice"
dico.get("nom", "?")  # Avec valeur par défaut
dico["ville"] = "Paris"  # Ajout/Modification

# Méthodes
dico.keys()     # Clés
dico.values()   # Valeurs
dico.items()    # Paires (clé, valeur)
dico.pop("age") # Supprimer et retourner
dico.update({}) # Fusionner

# Parcours
for cle, valeur in dico.items():
    print(f"{cle}: {valeur}")`} />
            </div>
          ),
        },
        {
          title: "Tuples",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Création (immuable)
tuple_ = (1, 2, 3)
singleton = (1,)  # Virgule obligatoire
vide = ()

# Opérations
tuple_[0]         # Accès
len(tuple_)       # Longueur
3 in tuple_       # Appartenance
tuple_ + (4, 5)   # Concaténation

# Unpacking
a, b, c = (1, 2, 3)
premier, *reste = (1, 2, 3, 4)  # premier=1, reste=[2,3,4]`} />
            </div>
          ),
        },
        {
          title: "Sets et Frozensets",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Set (ensemble mutable, éléments uniques)
s = {1, 2, 3}
vide = set()  # Pas {} (c'est un dict)

# Opérations
s.add(4)
s.remove(1)
s.discard(5)  # Pas d'erreur si absent

# Opérations ensemblistes
a | b   # Union
a & b   # Intersection
a - b   # Différence
a ^ b   # Différence symétrique

# Frozenset (immuable, hashable)
fs = frozenset([1, 2, 3])`} />
            </div>
          ),
        },
        {
          title: "Compréhensions dict/set",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Dict comprehension
carres = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Set comprehension
uniques = {x % 10 for x in nombres}

# Inverser un dictionnaire
inverse = {v: k for k, v in dico.items()}`} />
            </div>
          ),
        },
        {
          title: "Module collections",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`from collections import Counter, defaultdict, deque, namedtuple

# Counter - compter les occurrences
c = Counter("abracadabra")
c.most_common(2)  # [('a', 5), ('b', 2)]

# defaultdict - valeur par défaut
d = defaultdict(list)
d["cle"].append(1)  # Pas de KeyError

# deque - file double
dq = deque([1, 2, 3])
dq.appendleft(0)
dq.pop()

# namedtuple - tuple nommé
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(p.x, p.y)`} />
            </div>
          ),
        },
      ],
    },
    {
      id: "functions",
      letter: "g",
      title: "Les Fonctions",
      subsections: [
        {
          title: "Définition et appel",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Définition
def saluer(nom):
    """Docstring: description de la fonction"""
    return f"Bonjour, {nom}!"

# Appel
message = saluer("Alice")

# Fonction sans return (retourne None)
def afficher(texte):
    print(texte)`} />
            </div>
          ),
        },
        {
          title: "Arguments et paramètres",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Arguments positionnels
def addition(a, b):
    return a + b

# Arguments par défaut
def saluer(nom, msg="Bonjour"):
    return f"{msg}, {nom}"

# Arguments nommés
saluer(msg="Hi", nom="Bob")

# *args (tuple d'arguments)
def somme(*args):
    return sum(args)

# **kwargs (dict d'arguments)
def afficher(**kwargs):
    for k, v in kwargs.items():
        print(f"{k}: {v}")`} />
            </div>
          ),
        },
        {
          title: "Retour de valeurs",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Retour simple
def carre(x):
    return x ** 2

# Retour multiple (tuple)
def divmod_custom(a, b):
    return a // b, a % b

quotient, reste = divmod_custom(17, 5)

# Retour anticipé
def valider(age):
    if age < 0:
        return False
    return True`} />
            </div>
          ),
        },
        {
          title: "Portée des variables",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Variable globale
compteur = 0

def incrementer():
    global compteur  # Déclarer pour modifier
    compteur += 1

# Variable locale
def fonction():
    x = 10  # Locale à fonction
    return x

# Règle LEGB: Local, Enclosing, Global, Built-in

# Closure (fonction imbriquée)
def externe(x):
    def interne(y):
        return x + y  # Accès à x (enclosing)
    return interne`} />
            </div>
          ),
        },
        {
          title: "Fonctions récursives",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Factorielle
def factorielle(n):
    if n <= 1:
        return 1
    return n * factorielle(n - 1)

# Fibonacci
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Attention: limiter la profondeur
import sys
sys.setrecursionlimit(1000)`} />
            </div>
          ),
        },
      ],
    },
    {
      id: "modules",
      letter: "h",
      title: "Les Modules",
      subsections: [
        {
          title: "Importation de modules",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`# Import complet
import math
math.sqrt(16)

# Import avec alias
import numpy as np
np.array([1, 2, 3])

# Import spécifique
from math import sqrt, pi
sqrt(16)

# Import tout (déconseillé)
from math import *

# Module personnel
# fichier: mon_module.py
import mon_module`} />
            </div>
          ),
        },
        {
          title: "Aide sur les modules",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`import math

# Documentation
help(math)
help(math.sqrt)

# Liste des fonctions/attributs
dir(math)

# Docstring
print(math.sqrt.__doc__)`} />
            </div>
          ),
        },
        {
          title: "Module math",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`import math

math.pi        # 3.14159...
math.e         # 2.71828...
math.sqrt(x)   # Racine carrée
math.pow(x, y) # Puissance
math.floor(x)  # Arrondi inférieur
math.ceil(x)   # Arrondi supérieur
math.sin(x)    # Sinus (radians)
math.cos(x)    # Cosinus
math.log(x)    # Logarithme naturel
math.log10(x)  # Logarithme base 10
math.factorial(n)  # Factorielle`} />
            </div>
          ),
        },
        {
          title: "Module random",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`import random

random.random()        # Float [0, 1)
random.randint(1, 10)  # Entier [1, 10]
random.choice(liste)   # Élément aléatoire
random.shuffle(liste)  # Mélanger en place
random.sample(liste, k) # k éléments sans répétition
random.uniform(a, b)   # Float [a, b]

# Reproductibilité
random.seed(42)`} />
            </div>
          ),
        },
        {
          title: "Modules sys et os",
          content: (
            <div className="space-y-3 text-sm">
              <CodeBlock code={`import sys
sys.argv        # Arguments ligne de commande
sys.exit()      # Quitter le programme
sys.path        # Chemins de recherche modules
sys.version     # Version Python

import os
os.getcwd()     # Répertoire courant
os.chdir(path)  # Changer de répertoire
os.listdir()    # Lister les fichiers
os.mkdir(path)  # Créer un répertoire
os.remove(file) # Supprimer un fichier
os.path.exists(path)  # Vérifier existence
os.path.join(a, b)    # Joindre chemins`} />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="hero-gradient text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
              <span className="text-3xl">🐍</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Aide-Mémoire Python
              </h1>
              <p className="text-primary-foreground/80 mt-1">
                Module 2 : PP (Programmation Python)
              </p>
            </div>
          </div>
          <p className="text-primary-foreground/70 max-w-2xl text-sm md:text-base leading-relaxed">
            Référence complète couvrant les fondamentaux de Python : variables, structures de contrôle, 
            fonctions, modules et bien plus encore.
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-card/95 backdrop-blur border-b border-burgundy-muted py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-burgundy-muted hover:bg-burgundy text-burgundy-dark hover:text-primary-foreground transition-colors text-sm font-medium whitespace-nowrap"
              >
                <span className="w-5 h-5 rounded-full bg-burgundy text-primary-foreground text-xs flex items-center justify-center font-bold">
                  {section.letter}
                </span>
                <span className="hidden sm:inline">{section.title}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-6">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-20">
              <CheatsheetSection {...section} />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-burgundy-muted border-t border-burgundy-muted py-6 px-4 mt-8">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>
            Aide-Mémoire Python — Module 2 : Programmation Python
          </p>
          <p className="mt-1 text-burgundy">
            🐍 Happy Coding!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PythonCheatsheet;
