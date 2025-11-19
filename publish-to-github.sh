#!/bin/bash

# Script para publicar o projeto Super Pagamentos no GitHub

echo "🚀 Publicando Super Pagamentos no GitHub..."

# Adicionar remote (substitua USERNAME pelo seu usuário do GitHub)
read -p "Digite seu usuário do GitHub: " GITHUB_USER

if [ -z "$GITHUB_USER" ]; then
    echo "❌ Usuário do GitHub não fornecido. Saindo..."
    exit 1
fi

# Adicionar remote origin
git remote add origin https://github.com/${GITHUB_USER}/super-pagamentos.git 2>/dev/null || \
git remote set-url origin https://github.com/${GITHUB_USER}/super-pagamentos.git

echo "✅ Remote 'origin' configurado: https://github.com/${GITHUB_USER}/super-pagamentos.git"
echo ""
echo "📤 Fazendo push para o GitHub..."

# Fazer push
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Projeto publicado com sucesso!"
    echo "🌐 Acesse: https://github.com/${GITHUB_USER}/super-pagamentos"
else
    echo ""
    echo "❌ Erro ao fazer push. Verifique:"
    echo "   1. Se o repositório foi criado no GitHub"
    echo "   2. Se você tem permissões para fazer push"
    echo "   3. Se suas credenciais estão configuradas"
fi

