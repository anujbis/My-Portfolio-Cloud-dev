import os
import glob

replacements = {
    'text-slate-800': 'text-white',
    'text-slate-600': 'text-slate-300',
    'text-slate-500': 'text-slate-400',
    'bg-sky-50 ': 'bg-slate-800 ',
    'bg-sky-50"': 'bg-slate-800"',
    'bg-sky-100 ': 'bg-cyan-500/20 ',
    'bg-sky-100"': 'bg-cyan-500/20"',
    'text-sky-500': 'text-cyan-400',
    'text-sky-600': 'text-cyan-400',
    'text-sky-700': 'text-cyan-300',
    'border-sky-100': 'border-white/10',
    'border-sky-300': 'border-cyan-400',
    'bg-sky-500': 'bg-cyan-500',
    'bg-sky-400': 'bg-cyan-400',
    'from-sky-400': 'from-cyan-400',
    'to-indigo-400': 'to-purple-500',
    'bg-white/70': 'bg-slate-900/70',
    'bg-white/80': 'bg-slate-900/80',
    'bg-white/50': 'bg-slate-800/50',
    'bg-white/40': 'bg-black/40',
    'bg-white': 'bg-slate-900',
    'rgba(56,189,248,0.8)': 'rgba(0,229,255,0.8)',
    'rgba(56, 189, 248, 0.4)': 'rgba(0, 229, 255, 0.4)',
    'rgba(56, 189, 248, 0)': 'rgba(0, 229, 255, 0)',
    'bg-sky-200/20': 'bg-cyan-500/20',
    'bg-indigo-200/20': 'bg-purple-500/20',
    'Cloud Developer': 'Cyber Engineer',
    'Sky Infrastructure': 'Sci-Fi Meta-World',
    'Cloud Architect': 'Cyber Architect',
    'Cloud.Dev': 'Neon.Sys',
    'Floating Projects': 'Neon Projects',
    'Cloud Network Core': 'Cyber Network Core',
    'from-sky-200 via-sky-400 to-sky-100': 'from-cyan-500/50 via-cyan-400 to-pink-500/50',
    'bg-slate-100 hover:bg-white': 'bg-slate-800 hover:bg-slate-700 border-slate-700',
    'border border-slate-200': 'border border-slate-700',
    'floating in a sunlit sky': 'diving into a neon-lit cyberpunk metropolis',
    'sky. Elevating': 'city. Elevating',
    'clouds in an open sky': 'neural pathways in a synthetic brain',
    'Cloud Developer. Floating above the rest.': 'Cyber Engineer. Forging the digital frontier.'
}

files = glob.glob('src/components/**/*.tsx', recursive=True)
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = content
    for old_text, new_text in replacements.items():
        modified = modified.replace(old_text, new_text)
        
    if modified != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(modified)
        print(f'Updated {file}')
